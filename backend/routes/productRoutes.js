import express from "express";

import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const router = express.Router();

//desc: Fetch all products
//route: GET /api/products
//access: Public Route

router.route("/").get(getProducts);

//desc: Fetch a product by id
//route: GET /api/products/:id
//access: Public Route
router.route("/:id").get(getProductById);

export default router;
