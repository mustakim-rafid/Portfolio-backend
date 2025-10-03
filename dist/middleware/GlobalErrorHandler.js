"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globarErrorHandler = void 0;
const envConfig_1 = require("../config/envConfig");
const globarErrorHandler = (err, req, res, next) => {
    const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || 500;
    const message = (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong";
    res.status(statusCode).json({
        statusCode: statusCode,
        success: false,
        message,
        error: {
            err,
        },
        stack: (0, envConfig_1.getEnvs)().NODE_ENV === "development" && (err === null || err === void 0 ? void 0 : err.stack),
    });
};
exports.globarErrorHandler = globarErrorHandler;
