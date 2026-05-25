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
    console.log("executando instruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarOrixas() {
    var instrucaoSql = `
        SELECT resultado, DATE_FORMAT(dataQuiz, '%d/%m') AS dataQuiz
        FROM tentativa
        JOIN quiz
        ON fkQuiz = idQuiz
        WHERE tipo = 'Orixás'
        ORDER BY dataQuiz;
    `;
    console.log("executando instruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarEntidades() {
    var instrucaoSql = `
        SELECT resultado, DATE_FORMAT(dataQuiz, '%d/%m') AS dataQuiz
        FROM tentativa
        JOIN quiz
        ON fkQuiz = idQuiz
        WHERE tipo = 'Entidades'
        ORDER BY dataQuiz;
    `;
    console.log("executando instruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarFundamentos,
    buscarOrixas,
    buscarEntidades
}