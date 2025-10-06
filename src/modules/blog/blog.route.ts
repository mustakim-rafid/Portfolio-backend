import { Router } from "express";
import { blogControllers } from "./blog.controller";
import { upload } from "../../middleware/multer";
import { checkAuth } from "../../middleware/CheckAuth";

const router = Router()

router.route("/").post(
    checkAuth(),
    upload.single("thumbnail"),
    blogControllers.createBlog
)

router.route("/:uniquetitle").get(blogControllers.getBlogByUniqueTitle)
router.route("/").get(blogControllers.getAllBlogs)

export const blogRouter = router

