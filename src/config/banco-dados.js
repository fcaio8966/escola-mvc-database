const mysql = require("mysql2")

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "sistema_escolar"
})