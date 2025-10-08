"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutRouter = void 0;
const express_1 = require("express");
const about_controller_1 = require("./about.controller");
const router = (0, express_1.Router)();
router.route("/").get(about_controller_1.aboutControllers.getAboutMe);
exports.aboutRouter = router;
