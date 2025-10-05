import { Router } from "express";
import { adminControllers } from "./admin.controller";
import { checkAuth } from "../../middleware/CheckAuth";

const router = Router()

router.route("/").get(checkAuth, adminControllers.getAdminDetails)

export const adminRouter = router