function listar(require, response) {
    response.send("funcão listar")
}

function cadastrar(require, response) {
    response.send("função cadastrar")
}

function deletar(require, response) {
    response.send("função deletar")

}
module.exports = {
    listar,
    cadastrar,
    deletar
}