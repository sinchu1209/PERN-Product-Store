import express from "express";
import { CreateProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/" , getProducts); //get all products
router.get("/:id" , getProduct);
router.post("/" , CreateProduct); //create a product
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);
export default router;