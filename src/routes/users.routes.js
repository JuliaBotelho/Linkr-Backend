import { Router } from "express";
import { createUser, findUser } from "../controllers/users.controllers.js";
import { signUpMiddleware } from "../middlewares/UsersMiddlewares.js";

const router = Router();

router.post("/signup", signUpMiddleware, createUser);
router.get("/user/:id", findUser)

export default router;
