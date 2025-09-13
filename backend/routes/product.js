import express from "express";
const router = express.Router();
import { showProduct, updateProduct } from "../controllers/product.js";
import { createProduct, deleteProduct } from "../controllers/product.js";




router.post("/",createProduct)

// to delete a product from database
router.delete('/:id', deleteProduct)

// to get all the products 

router.get('/', showProduct)

// if we want to update some items in a product then use the patch method and if we want to update all the details in the product then we use the put method
router.put('/:id', updateProduct)

export default router;

