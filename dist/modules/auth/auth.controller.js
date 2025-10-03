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
exports.authControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const auth_service_1 = require("./auth.service");
const ApiResponse_1 = require("../../utils/ApiResponse");
const http_status_codes_1 = require("http-status-codes");
const setCookie_1 = require("../../utils/setCookie");
// *************** push on github ********************
const login = (0, catchAsync_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield auth_service_1.authServices.login(req.body);
    (0, setCookie_1.setCookie)(res, data.accessToken);
    (0, ApiResponse_1.ApiResponse)(res, true, http_status_codes_1.StatusCodes.OK, "Admin logged in successfully", data);
}));
const logout = (0, catchAsync_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });
    (0, ApiResponse_1.ApiResponse)(res, true, http_status_codes_1.StatusCodes.OK, "Admin logged out successfully", {});
}));
exports.authControllers = {
    login,
    logout
};
