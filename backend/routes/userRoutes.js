import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, admin, getAllUsers);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/register").post(registerUser);

export default router;
