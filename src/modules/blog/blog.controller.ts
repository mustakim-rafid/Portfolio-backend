import { Request, Response } from "express";
import { asyncHandler } from "../../utils/catchAsync";
import { blogServices } from "./blog.service";
import { ApiResponse } from "../../utils/ApiResponse";
import { StatusCodes } from "http-status-codes";

const createBlog = asyncHandler(async (req: Request, res: Response) => {
    req.body.isFeatured = req.body.isFeatured === "true"
    req.body.authorId = Number(req.body.authorId)
    const blog = await blogServices.createBlog(req.body, req.file?.path as string)
    ApiResponse(res, true, StatusCodes.CREATED, "Blog created successfully", blog)
})

const getBlogById = asyncHandler(async (req: Request, res: Response) => {
    const blog = await blogServices.getBlogById(Number(req.params.id))
    ApiResponse(res, true, StatusCodes.OK, "Blog retrieved successfully", blog)
})

const getAllBlogs = asyncHandler(async (req: Request, res: Response) => {
    const isFeatured = req.query.isFeatured === "true"
    const blog = await blogServices.getAllBlogs(isFeatured)
    ApiResponse(res, true, StatusCodes.OK, "Blog retrieved successfully", blog)
})

export const blogControllers = {
    createBlog,
    getBlogById,
    getAllBlogs
}