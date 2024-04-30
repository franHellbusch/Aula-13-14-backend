import express from "express";
import productsRouter from "./api/routes/products.routes.js";
import usersRouter from "./api/routes/users.routes.js";

// Instancia de la app de express
const app = express();

// leer json del usuario
app.use(express.json());

// configuracion de routers
app.use("/products", productsRouter);
app.use("/users", usersRouter);

// Puerto
const PORT = 8080;

// Escucha del servidor
app.listen(PORT, () => {
  console.info(`Servidor escuchando en http://localhost:${PORT}`);
});
