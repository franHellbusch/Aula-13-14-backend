import { products } from "../db/products.js";

export const getProducts = (req, res) => {
  const { limit } = req.query;
  const productsLimited = limit ? products.slice(0, limit) : products;
  res.status(200).json(productsLimited);
};

export const getProductById = (req, res) => {
  const { id } = req.params;

  const product = products.find((prod) => prod.id == id);

  res.status(200).json(product);
};

export const createProduct = (req, res) => {
  const { title, price } = req.body;

  if (!title || !price) {
    return res.status(404).send("Error: faltan datos en el body");
  }

  products.push(req.body);
  res.status(200).json(req.body);
};
