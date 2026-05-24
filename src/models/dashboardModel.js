var database = require("../database/config")

function buscarFundamentos() {
    var instrucaoSql = `
        SELECT resultado, DATE_FORMAT(dataQuiz, '%d/%m') AS dataQuiz
        FROM tentativa
        JOIN quiz
        ON fkQuiz = idQuiz
        WHERE tipo = 'Fundamentos'
        ORDER BY dataQuiz;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarFundamentos
}