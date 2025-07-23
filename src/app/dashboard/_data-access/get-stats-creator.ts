"use server"

import { prisma } from "@/lib/prisma"
import { stripe } from '@/lib/stripe'

export async function getStats(userId: string){
    
    if(!userId){
        return {
            error: "Usuario não encontrado"
        }
    }

    try {
        
    } catch (err) {
        return {
            error: "Flalha ao buscar estatisticas"
        }
        
    }

}