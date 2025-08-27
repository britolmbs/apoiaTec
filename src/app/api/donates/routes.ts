import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(request){
if(!request.auth){
    return NextResponse.json({error: 'Usuario não autenticado'}, {status: 401})
}
try {
    const donates = await prisma.donation.findMany({
        where: {
            userId: request.auth.user?.id,
            status: 'PAID' 
        },
        orderBy:{
            createdAt: 'desc'
        },
        select:{
            id: true,
            amount: true,
            createdAt: true,
            donorMessage: true,
            donorName: true
        }
    })

    return NextResponse.json({ data: donates })
} catch (err) {
    return NextResponse.json({error: "Falha a Buscar Donates"}, {status: 400})
}
})