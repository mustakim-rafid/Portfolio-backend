import { Router } from "express";
import { projectControllers } from "./project.controller";

const router = Router()

router.route("/").get(projectControllers.getAllProjects)

export const projectRouter = router