import { Router } from "express";
import {
  getProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
  deleteProductById,
  getUserProducts
} from "../controllers/productsController";
import { verifyToken } from "../libs/verifyToken";

const router = Router();

router.get("/products", getProducts);

router.get("/products/:id", getProductById);

router.get("/category/:category", getProductsByCategory);

router.post("/products/upload", verifyToken, createProduct);

// router.get("/products/profile", verifyToken, getUserProducts);

router.delete("/products/:id", verifyToken, deleteProductById);

// router.put("/tasks/:id", verifyToken, updateProductById);

export default router;
