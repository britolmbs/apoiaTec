"use server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const changeNameSchema = z.object({
    name: z.string().min(4, "O username precisa ter no minimo 4 caracteres")
})
type ChangeNameSchema = z.infer<typeof changeNameSchema>

export async function changeName(data: ChangeNameSchema) {
    const session = await auth();
    const userId = session?.user.id;

    if(!userId){
        return {
            data: null,
            error:"Usuário não conectado"
        }
    }

    const schema = changeNameSchema.safeParse(data)
    if(!schema.success){
        return{
            data: null,
            error: schema.error.issues[0].message
        }
    }

    try{
        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data:{
                name: data.name
            }
        })
        return {
            data: user.name,
            error: null
        }

    }catch(err){
        console.log(err);
        return {
            data: null,
            error: 'Falha ao Savar alterações.'
        }
    }

    
}