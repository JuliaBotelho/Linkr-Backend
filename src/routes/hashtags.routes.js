import { Router } from "express";
import {
  getPostHashtag,
  getRankingHashtags,
  openHashtag,
} from "../controllers/hashtags.controller.js";
import { authRoutesValidation } from "../middlewares/auth.Validation.middlewares.js";
const router = Router();

router.get("/hashtags",authRoutesValidation, getRankingHashtags);
router.get("/hashtags/:hashtag",authRoutesValidation, openHashtag);
router.get("/post/:hashtag",authRoutesValidation, getPostHashtag);

export default router;
