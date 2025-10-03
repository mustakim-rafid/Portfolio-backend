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
exports.seedAdmin = void 0;
const envConfig_1 = require("../config/envConfig");
const db_1 = require("../db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isAdminExists = yield db_1.prisma.admin.findUnique({
            where: {
                email: (0, envConfig_1.getEnvs)().ADMIN_EMAIL,
            },
        });
        if (isAdminExists) {
            console.log("Admin already exists");
            return;
        }
        const hashedPassword = yield bcryptjs_1.default.hash((0, envConfig_1.getEnvs)().ADMIN_PASSWORD, 10);
        const admin = yield db_1.prisma.admin.create({
            data: {
                name: "Admin",
                email: (0, envConfig_1.getEnvs)().ADMIN_EMAIL,
                password: hashedPassword,
            },
        });
        if (admin.id) {
            console.log("Admin created successfully");
        }
    }
    catch (error) {
        console.error("Error while creating admin ", error);
        throw error;
    }
});
exports.seedAdmin = seedAdmin;
