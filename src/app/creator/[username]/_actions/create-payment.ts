"use server"

import { prisma } from "@/lib/prisma"
import { stripe } from "@/lib/stripe"
import { z } from "zod"

const createUsernameSchema = z.object({
    slug: z.string().min(1, 'Slug do creador obrigatorio'),
    name: z.string().min(1, 'O nome é obrigatorio'),
    message: z.string().min(5, "A mensagem é Obrigatoria"),
    price: z.number().min(1500, "Selecione um valor"),
    creatorId: z.string()
})

type CreatePaymentSchema = z.infer<typeof createUsernameSchema>

export async function createPayment(data: CreatePaymentSchema) {
    const schema = createUsernameSchema.safeParse(data)

    if(!schema.success) {
        return {
            error: schema.error.issues[0].message
        }
    }

    if(!data.creatorId) {
        return {
            error: 'Falha ao criar o pagamento, tente mais tarde'
        }
    }

    try{
        const creator = await prisma.user.findFirst({
            where: {
                connectedStripeAccountId: data.creatorId
            }
        })
        if(!creator) {
            return{
                error: "Falha ao criar o pagamento, tente mais tarde"
            }
        }

        const applicationFeeAmount = Math.floor(data.price * 0.1)

        const danation = await prisma.donation.create({
            data: {
                donorName: data.name,
                donorMessage: data.message,
                userId: creator.id,
                status: "PENDING",
                amount: (data.price - applicationFeeAmount)
            }
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${process.env.HOST_URL}/creator/${data.slug}`,
            cancel_url: `${process.env.HOST_URL}/creator/${data.slug}`,
            line_items: [
                {
                    price_data:{
                        currency: "brl",
                        product_data:{
                            name: "Apioar " + creator.name
                        },
                        unit_amount: data.price,
                    },
                    quantity: 1,
                }
            ],
            payment_intent_data: {
                application_fee_amount: applicationFeeAmount,
                transfer_data:{
                  destination: creator.connectedStripeAccountId as string
                },
                metadata:{
                    donorName: data.name,
                    donorMessage: data.message,
                    donationId: danation.id
                }
            }
        })

        return {
            sessionId: session.id,
        }

    }catch(err) {
        return {
            error: "Falha ao criar o pagamento, tente mais tarde"
        }
    }
}