import { Router } from "express";
import cardsinexistance from "./utils/cards";
import Product from "../models/Product";
const router = Router();

router.get("/products", async (req, res) => {
  let products = await Product.find();
  products = products.concat(cardsinexistance);
  res.status(200).send(products);
});
router.get("/products/:id", async (req, res) => {
  let product = await Product.find({ _id: req.params.id });
  res.status(200).send(product);
});
router.post("/products/upload", async (req, res) => {
  let { title, price, description, img, categorie } = req.body;

  let product = new Product({
    title,
    price,
    description,
    img,
    categorie,
    quantity: 1,
  });
  await product.save();
});

export default router;
