import { Router } from "express"
import { deletePost } from "../controllers/posts.controllers.js"

const postsRoutes = Router()

postsRoutes.delete("/posts/:id", deletePost)

export default postsRoutes