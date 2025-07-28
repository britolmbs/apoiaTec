"use server"

import { prisma } from '@/lib/prisma'

export async function getAllDonates(userId: string){
    if(!userId){
        return {
            error: "Usuario não encontrado"
        }
    }

    try {
        const donates = await prisma.donation.findMany({
            where: {
                userId: userId,
                status: 'PAID'
            },
            orderBy: {
                createdAt: "desc"
            },
            select: {
                id: true,
                amount: true,
                createdAt: true,
                donorMessage: true,
                donorName: true
            }
        })

        return { 
            data: donates
        }
    } catch (err) {
        return {
            error: "Usuario não encontrado"
        }
        
    }
}