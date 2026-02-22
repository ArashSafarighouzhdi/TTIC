import express from "express";
import webData from "../data/webData.js";
const aboutRouter = express.Router();

aboutRouter.get("/", (req, res) => {
  res.render("pages/about", {
    documentTitle: "TTIC | About Arash",
    aboutData: webData.aboutData,
  });
});

export default aboutRouter;
