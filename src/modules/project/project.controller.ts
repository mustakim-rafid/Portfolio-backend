import { Request, Response } from "express";
import { asyncHandler } from "../../utils/catchAsync";
import { prisma } from "../../db";
import { ApiResponse } from "../../utils/ApiResponse";
import { StatusCodes } from "http-status-codes";

const getAllProjects = asyncHandler(async (req: Request, res: Response) => {
    const projects = await prisma.project.findMany()
    ApiResponse(res, true, StatusCodes.OK, "Projects retrieved successfully", projects)
})

export const projectControllers = {
    getAllProjects
}