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
