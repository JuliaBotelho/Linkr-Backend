import { Router } from "express"
import { deletePost, updatePost, createPost, timelinePosts } from "../controllers/posts.controllers.js"
import { authRoutesValidation } from "../middlewares/auth.Validation.middlewares.js"
import { postValidation } from "../middlewares/posts.middlewares.js"

const postsRoutes = Router()

postsRoutes.post("/posts", postValidation, authRoutesValidation, createPost)
postsRoutes.get("/posts", timelinePosts)
postsRoutes.delete("/posts/:id",authRoutesValidation, deletePost)
postsRoutes.put("/posts/:id",authRoutesValidation, updatePost)

export default postsRoutes