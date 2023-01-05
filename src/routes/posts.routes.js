import { Router } from "express"
import { deletePost, updatePost } from "../controllers/posts.controllers.js"
import { authRoutesValidation } from "../middlewares/auth.Validation.middlewares.js"

const postsRoutes = Router()

postsRoutes.delete("/posts/:id",authRoutesValidation,deletePost)
postsRoutes.put("/posts/:id",authRoutesValidation,updatePost)

export default postsRoutes