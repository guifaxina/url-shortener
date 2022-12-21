import express from "express";
import { urlFindAll, urlRedirectioner, urlShortener } from "../controllers/url-controller.js";

const router = express.Router();

router.get("/health-check", (_, res) => res.status(200).json({ status: "success", message: "Server working"}));
router.get("/get-urls", urlFindAll);
router.get("/:id", urlRedirectioner)

router.post("/short", urlShortener);

export default router;
