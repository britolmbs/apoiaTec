"use server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const getInfoUserSchema = z.object({
    username: z.string({ message: 'O username é obrigatorio'})
})

type GetInfoUserSchema = z.infer<typeof getInfoUserSchema>

export async function getInfoUser(data: GetInfoUserSchema) {

    const schema = getInfoUserSchema.safeParse(data)

    if(!schema.success) {
        return null
    }

    try{

        const user = await  prisma.user.findUnique({
            where: {
                username: data.username
            },
            select:{
                id: true,
                name: true,
                username: true,
                bio: true,
                image: true
            }
        })

        return user;

    }catch(err){
        return null
    }
}