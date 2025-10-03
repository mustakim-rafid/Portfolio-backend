import { Server } from "http";
import { app } from "./app";
import { connectDB } from "./db";
import { getEnvs } from "./config/envConfig";
import { seedAdmin } from "./helpers/seedAdmin";
import { seedProjects } from "./helpers/seedProjects";
import { seedAbout } from "./helpers/seedAbout";

let server: Server
const port = getEnvs().PORT || 5000

const startServer = async () => {
    try {
        await connectDB()
        server = app.listen(port, () => {
            console.log(`Server is running at port ${port}`)
        })
        await seedAdmin()
        await seedAbout()
        await seedProjects()
    } catch (error) {
        console.error("Error while starting the server", error)
        process.exit(1)
    }
}

startServer()