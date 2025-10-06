import express from "express"
import { globarErrorHandler } from "./middleware/GlobalErrorHandler"
import path from "path";
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.route"
import { blogRouter } from "./modules/blog/blog.route";
import { aboutRouter } from "./modules/about/about.route";
import { adminRouter } from "./modules/admin/admin.route";
import cors from "cors"
import { getEnvs } from "./config/envConfig";
import { projectRouter } from "./modules/project/project.route";

const app = express()

app.use(cors({
    origin: `${getEnvs().FRONTEND_URL}`,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/public', express.static(path.join(__dirname, '..', 'public')));

app.get("/", (req, res) => {
    res.send("Working")
})

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/blog", blogRouter)
app.use("/api/v1/about", aboutRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/project", projectRouter)

app.use(globarErrorHandler)

export {
    app
}