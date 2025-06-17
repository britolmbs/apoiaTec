"user server"
import { z } from "zod"

const createUsernameSchema = z.object({
    username: z.string({ message:"O username é obrigatorio" }).min(4, "Username de no minimo 4 caracters")
})

type CreateUsernameFormData = z.infer<typeof createUsernameSchema>

export async function createUsername(data: CreateUsernameFormData) {
    const schema = createUsernameSchema.safeParse(data)

    if(!schema.success){
        return {
            data: null,
            error: schema.error.issues[0].message
        }
    }
    return data.username
}