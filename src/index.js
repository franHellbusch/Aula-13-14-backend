import express from 'express'

// Instancia de la app de express
const app = express()

// Puerto
const PORT = 8080

// Escucha del servidor
app.listen(PORT, () => {
    console.info(`Servidor escuchando en http://localhost:${PORT}`)
})