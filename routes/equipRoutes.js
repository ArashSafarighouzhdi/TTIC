import express from "express";
import webData from "../data/webData.js";

const equipRoutes = express.Router();

equipRoutes.get("/", (req, res) => {
  res.render("pages/equipment", {
    documentTitle: "TTIC | " + webData.equipment.title,
    title: webData.equipment.title,
    disclaimer: webData.equipment.priceDisclaimer,
    brands: webData.equipment.brands,
  });
});

equipRoutes.get("/:name", (req, res) => {
  const productName = req.params.name.replace(/-/g, " ").toLowerCase();
  let foundProduct = null;

  webData.equipment.brands.forEach((brand) => {
    const blade = brand.blades.find((b) => b.name.toLowerCase() === productName);
    const rubber = brand.rubbers.find((r) => r.name.toLowerCase() === productName);

    if (blade) foundProduct = blade;
    else if (rubber) foundProduct = rubber;
  });

  if (foundProduct) {
    res.render("pages/detail", {
      documentTitle: "TTIC | " + foundProduct.name,
      product: foundProduct,
    });
  } else {
    res.status(404).render("pages/equipment", {
      documentTitle: "TTIC | Product Not Found",
      title: "Product Not Found",
      disclaimer: "",
      brands: [],
    });
  }
});

export default equipRoutes;
