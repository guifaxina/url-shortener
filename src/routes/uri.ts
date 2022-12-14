import express from "express";
// Controller
import { urlFindAll, urlRedirectioner, urlShortener } from "../controllers/url-controller";

const router = express.Router();

router.get("/health-check", (_, res) => res.status(200));
router.get("/get-urls", urlFindAll);
router.get("/:id", urlRedirectioner)

router.post("/short", urlShortener);

export default router;
