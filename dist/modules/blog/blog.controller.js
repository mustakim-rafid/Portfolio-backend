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
exports.blogControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const blog_service_1 = require("./blog.service");
const ApiResponse_1 = require("../../utils/ApiResponse");
const http_status_codes_1 = require("http-status-codes");
const createBlog = (0, catchAsync_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    req.body.isFeatured = req.body.isFeatured === "true";
    req.body.authorId = Number(req.body.authorId);
    const blog = yield blog_service_1.blogServices.createBlog(req.body, (_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
    (0, ApiResponse_1.ApiResponse)(res, true, http_status_codes_1.StatusCodes.CREATED, "Blog created successfully", blog);
}));
const getBlogByUniqueTitle = (0, catchAsync_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_service_1.blogServices.getBlogByUniqueTitle(req.params.uniquetitle);
    (0, ApiResponse_1.ApiResponse)(res, true, http_status_codes_1.StatusCodes.OK, "Blog retrieved successfully", blog);
}));
const getAllBlogs = (0, catchAsync_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isFeatured = req.query.isFeatured === "true";
    const blog = yield blog_service_1.blogServices.getAllBlogs(isFeatured);
    (0, ApiResponse_1.ApiResponse)(res, true, http_status_codes_1.StatusCodes.OK, "Blog retrieved successfully", blog);
}));
const deleteBlogById = (0, catchAsync_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield blog_service_1.blogServices.deleteBlogById(Number(id));
    (0, ApiResponse_1.ApiResponse)(res, true, http_status_codes_1.StatusCodes.OK, "Blog deleted successfully", {});
}));
const updateBlogById = (0, catchAsync_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const blog = yield blog_service_1.blogServices.updateBlogById(Number(id), req.body);
    (0, ApiResponse_1.ApiResponse)(res, true, http_status_codes_1.StatusCodes.OK, "Blog updated successfully", blog);
}));
exports.blogControllers = {
    createBlog,
    getBlogByUniqueTitle,
    getAllBlogs,
    deleteBlogById,
    updateBlogById
};
