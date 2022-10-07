import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    throw new Error("Product not found");
  }
});
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ msg: "Product Removed" });
  } else {
    throw new Error("Product not found");
  }
});
export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample",
    category: "Sample Cat.",
    countInStocks: 0,
    numReviews: 0,
    rating: 0,
    description: "Sample Description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStocks } =
    req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStocks = countInStocks;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } else {
    res.status(400);
    throw new Error("Product not found");
  }
});
