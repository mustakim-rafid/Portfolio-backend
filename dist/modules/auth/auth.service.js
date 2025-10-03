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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const db_1 = require("../../db");
const AppError_1 = require("../../utils/AppError");
const http_status_codes_1 = require("http-status-codes");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../../utils/jwt");
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdminExists = yield db_1.prisma.admin.findUnique({
        where: {
            email: payload.email
        }
    });
    if (!isAdminExists) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "Wrong admin email");
    }
    const isPasswordCorrect = yield bcryptjs_1.default.compare(payload.password, isAdminExists.password);
    if (!isPasswordCorrect) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Password is incorrect");
    }
    const accessToken = (0, jwt_1.generateToken)({
        id: isAdminExists.id,
        name: isAdminExists.name,
        email: isAdminExists.email
    });
    const { password } = isAdminExists, rest = __rest(isAdminExists, ["password"]);
    return Object.assign({ accessToken }, rest);
});
exports.authServices = {
    login
};
