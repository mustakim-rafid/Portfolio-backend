import { Prisma } from "@prisma/client";
import { AppError } from "../../utils/AppError";
import { StatusCodes } from "http-status-codes";
import { uploadToCloudinary } from "../../utils/cloudinary";
import { prisma } from "../../db";

const createBlog = async (payload: Omit<Prisma.BlogCreateInput, "thumbnail" | "owner" | "createdAt" | "updatedAt"> & { authorId: number }, imgLocalPath: string) => {
    if (!payload.title || !payload.content || !payload.isFeatured || !payload.tags || !payload.authorId || !imgLocalPath) {
        throw new AppError(StatusCodes.NOT_FOUND, "Required field is missing")
    }

    const uniqueTitle = payload.title.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    const res = await uploadToCloudinary(imgLocalPath)

    if (!res?.secure_url) {
        throw new AppError(StatusCodes.NOT_FOUND, "Thumbnail url is missing")
    }

    const blog = await prisma.blog.create({
        data: {
            title: payload.title,
            uniqueTitle,
            content: payload.content,
            isFeatured: payload.isFeatured,
            tags: payload.tags,
            thumbnail: res.secure_url,
            owner: {
                connect: {
                    id: payload.authorId
                }
            }
        }
    })

    return blog
}

const getBlogById = async (id: number) => {
    const blog = await prisma.blog.findUnique({
        where: {
            id
        },
        include: {
            owner: true
        }
    })

    return blog
}

const getAllBlogs = async (isFeatured: boolean) => {
    const blogs = await prisma.blog.findMany({
        where: {
            isFeatured
        },
        orderBy: {
            createdAt: "desc" 
        },
        include: {
            owner: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })

    return blogs
}

export const blogServices = {
    createBlog,
    getBlogById,
    getAllBlogs
}