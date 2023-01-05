import { Router } from "express";

import { createUser, findUser,userSignIn } from "../controllers/users.controllers.js";

import {
  signInMiddleware,
  signUpMiddleware,
} from "../middlewares/UsersMiddlewares.js";


const router = Router();

router.post("/signup", signUpMiddleware, createUser);
router.post("/signin", signInMiddleware, userSignIn);
router.get("/user/:id", findUser);


export default router;
