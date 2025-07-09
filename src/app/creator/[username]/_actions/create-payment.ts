"use server"

import { prisma } from "@/lib/prisma"
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
            data: null,
            error: schema.error.issues[0].message
        }
    }

    try{
        const creator = await prisma.user.findUnique({
            where: {
                id: data.creatorId
            }
        })

    }catch(err) {
        return {
            data: null,
            error: "Falha ao criar o pagamento"
        }
    }
}