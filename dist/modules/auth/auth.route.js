"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
router.route("/login").post(auth_controller_1.authControllers.login);
router.route("/logout").post(auth_controller_1.authControllers.logout);
exports.authRouter = router;
