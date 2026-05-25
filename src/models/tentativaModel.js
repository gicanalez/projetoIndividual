var database = require("../database/config");

function cadastrar(fkUsuario, fkQuiz, resultado){

    var instrucaoSql = `
    INSERT INTO tentativa
    (fkUsuario, fkQuiz, resultado, dataQuiz) VALUES
    (${fkUsuario}, ${fkQuiz}, ${resultado}, NOW());`

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}