import { Router } from "express";

import { authRoutesValidation } from "../middlewares/auth.Validation.middlewares.js";

import {
  createUser,
  findUser,
  infoUser,
  userSignIn,
} from "../controllers/users.controllers.js";

import {
  signInMiddleware,
  signUpMiddleware,
} from "../middlewares/UsersMiddlewares.js";

const router = Router();

router.post("/signup", signUpMiddleware, createUser);
router.post("/signin", signInMiddleware, userSignIn);
router.get("/info/user", infoUser);
router.get("/user/:id", authRoutesValidation, findUser);

export default router;
