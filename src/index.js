import express from "express";
import { products } from "./api/db/products.js";

// Instancia de la app de express
const app = express();

// leer json del usuario
app.use(express.json());

// query params (no obligatorios)
app.get("/products", (req, res) => {
  const { limit } = req.query;
  const productsLimited = limit ? products.slice(0, limit) : products;
  res.status(200).json(productsLimited);
});

// parametro obligatorio
app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((prod) => prod.id == id);

  res.status(200).json(product);
});

// Metodo POST
app.post("/products", (req, res) => {
  const { title, price } = req.body;

  if (!title || !price) {
    return res.status(404).send("Error: faltan datos en el body");
  }

  products.push(req.body);
  res.status(200).json(req.body);
});

// Puerto
const PORT = 8080;

// Escucha del servidor
app.listen(PORT, () => {
  console.info(`Servidor escuchando en http://localhost:${PORT}`);
});
