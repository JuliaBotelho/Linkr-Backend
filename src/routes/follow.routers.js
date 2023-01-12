import { Router } from "express";
import { following, followUser } from "../controllers/follow.controllers.js";
import { authRoutesValidation } from "../middlewares/auth.Validation.middlewares.js";

const router = Router();

router.post("/follow/:id", authRoutesValidation, followUser);
router.get("/following", authRoutesValidation, following);

export default router;
