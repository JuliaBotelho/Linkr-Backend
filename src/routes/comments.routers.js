import { Router } from "express"
import { getComment, createComment } from "../controllers/comments.controllers.js"
import { authRoutesValidation } from "../middlewares/auth.Validation.middlewares.js"

const commentsRoutes = Router()

commentsRoutes.get("/posts/:id/comments",getComment)
commentsRoutes.post("/posts/:id/comments",authRoutesValidation, createComment)

export default commentsRoutes