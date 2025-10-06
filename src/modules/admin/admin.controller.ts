import { Request, Response } from "express";
import { asyncHandler } from "../../utils/catchAsync";
import { prisma } from "../../db";
import { ApiResponse } from "../../utils/ApiResponse";
import { AppError } from "../../utils/AppError";
import { StatusCodes } from "http-status-codes";

const getAdminDetails = asyncHandler(async (req: Request, res: Response) => {
    const data = await prisma.admin.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    if (!data) {
        throw new AppError(StatusCodes.NOT_FOUND, "Admin data not found")
    }

    ApiResponse(res, true, StatusCodes.OK, "Admin retrieved successfully", data[0])
})

export const adminControllers = {
    getAdminDetails
}