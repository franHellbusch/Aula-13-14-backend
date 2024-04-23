import express from "express";

// Instancia de la app de express
const app = express();

// Rutas: endpoints (URLs)
// req: request (peticion)
// res: response (respuesta)
// Metodo GET
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      title: "title1",
    },
  ];
  res.status(200).json(products);
});

// Metodo POST
app.post("/products", (req, res) => {
  res.send("Se creo un producto");
});

// Puerto
const PORT = 8080;

// Escucha del servidor
app.listen(PORT, () => {
  console.info(`Servidor escuchando en http://localhost:${PORT}`);
});
