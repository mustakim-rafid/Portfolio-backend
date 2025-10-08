"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const admin_controller_1 = require("./admin.controller");
const CheckAuth_1 = require("../../middleware/CheckAuth");
const router = (0, express_1.Router)();
router.route("/").get((0, CheckAuth_1.checkAuth)(), admin_controller_1.adminControllers.getAdminDetails);
exports.adminRouter = router;
