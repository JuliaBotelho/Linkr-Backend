import { Router } from "express"
import { deletePost, createPost } from "../controllers/posts.controllers.js"
import { postValidation } from "../middlewares/posts.middlewares.js"

const postsRoutes = Router()

postsRoutes.post("/posts", postValidation ,createPost)
postsRoutes.delete("/posts/:id", deletePost)

export default postsRoutes