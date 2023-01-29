import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import ShortUrl from "./models/shortUrl.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();

  res.send(shortUrls);
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

app.post("/", async (req, res) => {
  const shortUrl = await ShortUrl.create({ full: req.body.url });

  res.send(shortUrl);
});

app.delete("/:shortUrl", async (req, res) => {
  await ShortUrl.deleteOne({ short: req.params.shortUrl });

  res.send();
});

app.listen(process.env.PORT);
