const bancoDados = require("../config/banco-dados")

async function listar(req,res){
    const cursos =await bancoDados.conexao.query("SELECT*FROM cursos")
    res.send("função responsavel pela listagem de professores")
    console.log("curso",cursos)
}

function listar(req, res) {
    res.send("função listar");
}

function cadastrar(req, res) {
    res.send("função cadastrar");
}

function atualizar(req, res) {
    res.send("função atualizar");
}

function deletar(req, res) {
    res.send("função deletar");
}

module.exports = {
    listar,
    cadastrar,
    atualizar,
    deletar
};