import { Prisma } from "@prisma/client";
import { prisma } from "../../db"
import { AppError } from "../../utils/AppError";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt";

const login = async (payload: Pick<Prisma.AdminCreateInput, "email" | "password">) => {
    const isAdminExists = await prisma.admin.findUnique({
        where: {
            email: payload.email
        }
    })

    if (!isAdminExists) {
        throw new AppError(StatusCodes.NOT_FOUND, "Wrong admin email")
    }

    const isPasswordCorrect = await bcrypt.compare(payload.password, isAdminExists.password)

    if (!isPasswordCorrect) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Password is incorrect")
    }

    const accessToken = generateToken({
        id: isAdminExists.id,
        name: isAdminExists.name,
        email: isAdminExists.email
    })

    const { password, ...rest } = isAdminExists

    return {
        accessToken,
        ...rest
    }
}

export const authServices = {
    login
}