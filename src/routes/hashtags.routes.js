import { Router } from "express";
import { getPostHashtag, getRankingHashtags, openHashtag } from "../controllers/hashtags.controller.js";

const router = Router();

router.get("/hashtags",getRankingHashtags)
router.get("/hashtags/:hashtag",openHashtag)
router.get("/post/:hashtag",getPostHashtag)

export default router;