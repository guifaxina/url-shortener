import { Request, Response } from "express";
import urlModel from "../models/url-model.js";
import { nanoid } from "nanoid";
import { validateUrl } from "../utils/validate-regex.js";

const BASE = "http://localhost:3000/";

export const urlShortener = async (req: Request, res: Response) => {
  const url: string = req.body.url;
  
  if (!validateUrl(url)) 
  return res.status(400).json({ status: "error", message: "URL not valid."})
  
  const isUrlRegistered = await urlModel.findOne({
    where: { longUrl: url },
  });

  if (isUrlRegistered)
    res.send(`Your url shortened link: ${isUrlRegistered.dataValues.shortUrl}`);
  else {
    const data = await urlModel.create({
      shortUrl: BASE + nanoid(8),
      longUrl: url,
    });
    res.status(201).json({
      status: "success",
      message: "Url created",
      data: data,
    });
  }
};

export const urlRedirectioner = async (req: Request, res: Response) => {
  const shortUrlId = req.params.id;

  const isShortUrlValid = await urlModel.findOne({
    where: { shortUrl: BASE + shortUrlId },
  });

  if (isShortUrlValid) 
  res.redirect(`${isShortUrlValid.dataValues.longUrl}`);
  else
  res.status(404).json({ status: "error", message: "Invalid path, url not found." });
};

export const urlFindAll = async (_: Request, res: Response) => {
  const find = await urlModel.findAll({});
  res.status(200).json({ status: "success", message: "Successfully found URL list.", data: find});
}