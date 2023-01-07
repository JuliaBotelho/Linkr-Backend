import { Router } from "express";
import { getRankingHashtags } from "../controllers/hashtags.controller.js";

const router = Router();

router.get("/hashtags",getRankingHashtags)

export default router;