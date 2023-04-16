import { Router } from "express";
import cardsinexistance from "./utils/cards";
import Product from "../models/Product";
const router = Router();

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find();
    products = products.concat(cardsinexistance);
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
  }
});
router.get("/products/:id", async (req, res) => {
  try {
    let id = req.params.id;
    if (id.length === 1) {
      cardsinexistance.map((product) => {
        if (product._id === id) {
          return res.status(200).send({ msg: "product found", product });
        }
      });
    } else {
      let product = await Product.findById(id);
      return res.status(200).send({ msg: "product found", product });
    }
  } catch (e) {
    console.log(e);
  }
});
router.delete("/products/:id", async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).send("Deleted successfully");
  } catch (e) {
    console.log(e);
  }
});
router.post("/products/upload", async (req, res) => {
  try {
    let { title, price, description, img, category } = req.body;
    let product = new Product({
      title,
      price,
      description,
      img,
      category,
      quantity: 1,
    });
    await product.save();
    res.status(200).send("Product saved");
  } catch (e) {
    console.log(e);
  }
});

export default router;
