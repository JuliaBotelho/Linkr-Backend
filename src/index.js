import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes.js";
import postsRoutes from "./routes/posts.routes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(postsRoutes)
app.use(usersRoutes);

const port = process.env.PORT || 4000
app.listen (port, () => console.log(`Server running in port ${port}`))
