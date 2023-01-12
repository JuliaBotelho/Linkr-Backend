import { Router } from "express"
import { getPost, Post } from "../controllers/comments.controllers.js"

const commentsRoutes = Router()

commentsRoutes.get("/comments/:id",getPost)
postsRoutes.post("/comments/:id", Post)

export default commentsRoutes