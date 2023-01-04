import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { signUpMiddleware } from "../middlewares/UsersMiddlewares.js";

const router = Router();

router.post("/signup", signUpMiddleware, createUser);

export default router;
