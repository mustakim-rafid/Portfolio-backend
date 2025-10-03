import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient() 

export const connectDB = async () => {
    try {
        await prisma.$connect()
        console.log("DB connected successfully")
    } catch (error) {
        console.error("DB connection failed", error)
        throw error
    }
}