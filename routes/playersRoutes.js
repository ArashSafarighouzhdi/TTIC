import express from "express";
import webData from "../data/webData.js";

const playerRouter = express.Router();

playerRouter.get("/", (req, res) => {
  res.render("pages/players", {
    documentTitle: "TTIC | World Rankings",
    menPlayers: webData.menPlayers,
    womenPlayers: webData.womenPlayers,
  });
});

playerRouter.get("/:id", (req, res) => {
  const player =
    webData.menPlayers.items.find((p) => p.id === req.params.id) ||
    webData.womenPlayers.items.find((p) => p.id === req.params.id);

  if (player) {
    res.render("pages/playersequipment", {
      documentTitle: `TTIC | ${player.name}`,
      player,
    });
  } else {
    res.status(404).redirect("/players");
  }
});

export default playerRouter;
