import { Router } from "express"
import { getComment, createComment } from "../controllers/comments.controllers.js"

const commentsRoutes = Router()

commentsRoutes.get("/comments/:id",getComment)
commentsRoutes.post("/comments/:id", createComment)

export default commentsRoutes