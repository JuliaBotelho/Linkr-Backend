import { Router } from "express";
import { createUser, userSignIn } from "../controllers/users.controllers.js";
import {
  signInMiddleware,
  signUpMiddleware,
} from "../middlewares/UsersMiddlewares.js";

const router = Router();

router.post("/signup", signUpMiddleware, createUser);
router.post("/signin", signInMiddleware, userSignIn);

export default router;
