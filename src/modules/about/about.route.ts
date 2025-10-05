import { Router } from "express";
import { aboutControllers } from "./about.controller";

const router = Router()

router.route("/").get(aboutControllers.getAboutMe)

export const aboutRouter = router