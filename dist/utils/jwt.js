"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envConfig_1 = require("../config/envConfig");
const generateToken = (payload) => {
    const accessToken = jsonwebtoken_1.default.sign(payload, (0, envConfig_1.getEnvs)().ACCESS_TOKEN_SECRET, {
        expiresIn: (0, envConfig_1.getEnvs)().ACCESS_TOKEN_EXPIRY
    });
    return accessToken;
};
exports.generateToken = generateToken;
