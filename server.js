const express = require("express")

const cursoCOntroller = require("./src/controllers/cursosControllers.js")
const app = express()


app.get("/cursos", cursosControlles.listar)


app.listen(3000, () => {
    console.log("servidor rodando na porta ")
})



