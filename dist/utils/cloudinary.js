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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const envConfig_1 = require("../config/envConfig");
const AppError_1 = require("./AppError");
const http_status_codes_1 = require("http-status-codes");
const fs_1 = __importDefault(require("fs"));
cloudinary_1.v2.config({
    cloud_name: (0, envConfig_1.getEnvs)().CLOUDINARY.CLOUDINARY_CLOUD_NAME,
    api_key: (0, envConfig_1.getEnvs)().CLOUDINARY.CLOUDINARY_API_KEY,
    api_secret: (0, envConfig_1.getEnvs)().CLOUDINARY.CLOUDINARY_API_SECRET,
});
const uploadToCloudinary = (localFilePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uploadResult = yield cloudinary_1.v2.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        if (!(uploadResult === null || uploadResult === void 0 ? void 0 : uploadResult.url)) {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "Cloudinary url is missing");
        }
        fs_1.default.unlinkSync(localFilePath);
        return uploadResult;
    }
    catch (error) {
        fs_1.default.unlinkSync(localFilePath);
        console.error("Error while uploading on cloudinary ", error);
    }
});
exports.uploadToCloudinary = uploadToCloudinary;
