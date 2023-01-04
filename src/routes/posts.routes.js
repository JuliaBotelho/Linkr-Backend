import { Router } from "express"
import { deletePost } from "../controllers/posts.controllers.js"
import { authRoutesValidation } from "../middlewares/auth.Validation.middlewares.js"

const postsRoutes = Router()

postsRoutes.delete("/posts/:id", authRoutesValidation, deletePost)

export default postsRoutes