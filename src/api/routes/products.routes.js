import { Router } from "express";
import { createProduct, getProductById, getProducts } from "../controllers/products.controllers.js";

const productsRouter = Router();

productsRouter.get("/", getProducts);

productsRouter.get("/:id", getProductById);

productsRouter.post("/", createProduct);

export default productsRouter;
