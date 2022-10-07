import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

//desc: Fetch all products
//route: GET /api/products
//access: Public Route

router.route("/").get(getProducts).post(protect, admin, createProduct);

//desc: Fetch a product by id
//route: GET /api/products/:id
//access: Public Route
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
