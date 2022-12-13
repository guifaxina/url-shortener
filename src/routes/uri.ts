import express from "express";

const router = express.Router();

router.get("/", (_, res) => {
  res.send("working");
});

router.post("/short", (req, res) => {
  const url = req.body.url
   
});

export default router;
