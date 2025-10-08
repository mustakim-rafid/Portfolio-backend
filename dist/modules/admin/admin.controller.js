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
exports.adminControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const db_1 = require("../../db");
const ApiResponse_1 = require("../../utils/ApiResponse");
const AppError_1 = require("../../utils/AppError");
const http_status_codes_1 = require("http-status-codes");
const getAdminDetails = (0, catchAsync_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db_1.prisma.admin.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    });
    if (!data) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "Admin data not found");
    }
    (0, ApiResponse_1.ApiResponse)(res, true, http_status_codes_1.StatusCodes.OK, "Admin retrieved successfully", data[0]);
}));
exports.adminControllers = {
    getAdminDetails
};
