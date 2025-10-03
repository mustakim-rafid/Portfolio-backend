import { Router } from "express";
import { authControllers } from "./auth.controller";

const router = Router()

router.route("/login").post(authControllers.login)

export const authRouter = router