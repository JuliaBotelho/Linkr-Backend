import { Router } from "express";
import { searchUser } from "../controllers/search.controllers.js";

const router = Router();

router.get("/search/:username", searchUser);

export default router;
