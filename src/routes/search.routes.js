import { Router } from "express";
import { searchUser } from "../controllers/search.controllers.js";
import { authRoutesValidation } from "../middlewares/auth.Validation.middlewares.js";

const router = Router();

router.get("/search/:username",authRoutesValidation, searchUser);

export default router;
