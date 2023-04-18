import { Router } from "express";
import cardsinexistance from "./utils/cards";
import Product from "../models/Product";

const router = Router();

export const getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    products = products.concat(cardsinexistance);
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
  }
};

export const getProductById = async (req, res) => {
  try {
    let id = req.params.id;
    if (id.length === 1) {
      cardsinexistance.map((product) => {
        if (product._id === id) {
          return res.status(200).send(product);
        }
      });
    } else {
      let product = await Product.findById(id);
      return res.status(200).send(product);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    let category = req.params.category;
    let products = await Product.find({ category });
    products = products.concat(cardsinexistance);
    res.status(200).send(products);
  } catch (e) {
    console.log(e);
  }
};

export const createProduct = async (req, res) => {
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
    let a = await product.save();
    return res.status(200).send(a);
  } catch (e) {
    console.log(e);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).send("Deleted successfully");
  } catch (e) {
    console.log(e);
  }
};
