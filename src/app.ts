import express from "express"
import { globarErrorHandler } from "./middleware/GlobalErrorHandler"
import path from "path";
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.route"
import { blogRouter } from "./modules/blog/blog.route";

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.get("/", (req, res) => {
    res.send("Working")
})

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/blog", blogRouter)

app.use(globarErrorHandler)

export {
    app
}