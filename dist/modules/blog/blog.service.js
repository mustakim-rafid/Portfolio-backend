"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogServices = void 0;
const AppError_1 = require("../../utils/AppError");
const http_status_codes_1 = require("http-status-codes");
const cloudinary_1 = require("../../utils/cloudinary");
const db_1 = require("../../db");
const createBlog = (payload, imgLocalPath) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload.title || !payload.content || !payload.isFeatured || !payload.tags || !payload.authorId || !imgLocalPath) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "Required field is missing");
    }
    const uniqueTitle = payload.title.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const res = yield (0, cloudinary_1.uploadToCloudinary)(imgLocalPath);
    if (!(res === null || res === void 0 ? void 0 : res.secure_url)) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "Thumbnail url is missing");
    }
    const blog = yield db_1.prisma.blog.create({
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
    });
    return blog;
});
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield db_1.prisma.blog.findUnique({
        where: {
            id
        },
        include: {
            owner: true
        }
    });
    return blog;
});
const getAllBlogs = (isFeatured) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield db_1.prisma.blog.findMany({
        where: {
            isFeatured
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return blogs;
});
exports.blogServices = {
    createBlog,
    getBlogById,
    getAllBlogs
};
