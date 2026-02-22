import express from "express";
import * as path from "path";
import "dotenv/config";
import webData from "./data/webData.js";
import equipRoutes from "./routes/equipRoutes.js";
import playerRoutes from "./routes/playersRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/index"), {
    documentTitle: "TTIC | Home",
    data: webData,
  });
});

app.use("/equipment", equipRoutes);
app.use("/players", playerRoutes);
app.use("/about", aboutRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
