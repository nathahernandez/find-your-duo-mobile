import { Router } from "express";
import * as controller from "../controller";

export const router = Router();

router.get("/games", controller.getGames);
router.post("/games/:id/ads", controller.createGameAds);
router.get("/games/:id/ads", controller.listGameAds);
router.get("/ads/:id/discord", controller.getDiscordUser);