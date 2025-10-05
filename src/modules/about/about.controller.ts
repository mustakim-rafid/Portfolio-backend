import { Request, Response } from "express";
import { asyncHandler } from "../../utils/catchAsync";
import { prisma } from "../../db";
import { AppError } from "../../utils/AppError";
import { StatusCodes } from "http-status-codes";
import { ApiResponse } from "../../utils/ApiResponse";

const getAboutMe = asyncHandler(async (req: Request, res: Response) => {
    const data = await prisma.about.findMany()

    if (data.length === 0) {
        throw new AppError(StatusCodes.NOT_FOUND, "About data is missing")
    }

    const about = data[0]
    
    ApiResponse(res, true, StatusCodes.OK, "About details retrieved successfully", about)
})

export const aboutControllers = {
    getAboutMe
}