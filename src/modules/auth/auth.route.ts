import { Router } from "express";
import { authControllers } from "./auth.controller";

const router = Router()

router.route("/login").post(authControllers.login)
router.route("/logout").post(authControllers.logout)

export const authRouter = router