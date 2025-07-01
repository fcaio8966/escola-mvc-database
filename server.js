const express = require("express");

// Corrigindo os nomes dos imports
const cursosControllers = require("./src/controllers/cursosControllers.js");
const professorControllers = require("./src/controllers/professorControllers.js");
const alunosControllers = require("./src/controllers/alunosControllers.js");

const app = express();

// Rotas de cursos
app.get("/cursos/listar", cursosControllers.listar);
app.post("/cursos/cadastrar", cursosControllers.cadastrar);
app.put("/cursos/atualizar", cursosControllers.atualizar);
app.delete("/cursos/deletar", cursosControllers.deletar);

// Rotas de professor
app.get("/professor/listar", professorControllers.listar);
app.post("/professor/cadastrar", professorControllers.cadastrar);
app.put("/professor/atualizar", professorControllers.atualizar);
app.delete("/professor/deletar", professorControllers.deletar);

// Rotas de alunos
app.get("/alunos/listar", alunosControllers.listar);
app.post("/alunos/cadastrar", alunosControllers.cadastrar);
app.put("/alunos/atualizar", alunosControllers.atualizar);
app.delete("/alunos/deletar", alunosControllers.deletar);

// Inicializando o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
