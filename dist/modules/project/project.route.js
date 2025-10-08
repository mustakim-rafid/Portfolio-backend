"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const router = (0, express_1.Router)();
router.route("/").get(project_controller_1.projectControllers.getAllProjects);
exports.projectRouter = router;
