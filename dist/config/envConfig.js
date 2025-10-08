"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "./.env",
});
const getEnvs = () => {
    return {
        PORT: process.env.PORT,
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
        ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
        CLOUDINARY: {
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
            CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
            CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        },
        FRONTEND_URL: process.env.FRONTEND_URL
    };
};
exports.getEnvs = getEnvs;
