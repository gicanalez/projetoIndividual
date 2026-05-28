var database = require("../database/config")

function buscarFundamentos(fkUsuario) {
    var instrucaoSql = `
        SELECT resultado, DATE_FORMAT(dataQuiz, '%d/%m') AS dataQuiz
        FROM tentativa
        JOIN quiz
        ON fkQuiz = idQuiz
        WHERE tipo = 'Fundamentos'
        AND fkUsuario = ${fkUsuario}
        ORDER BY dataQuiz;
    `;
    console.log("executando instruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarOrixas(fkUsuario) {
    var instrucaoSql = `
        SELECT resultado, DATE_FORMAT(dataQuiz, '%d/%m') AS dataQuiz
        FROM tentativa
        JOIN quiz
        ON fkQuiz = idQuiz
        WHERE tipo = 'Orixás'
        AND fkUsuario = ${fkUsuario}
        ORDER BY dataQuiz;
    `;
    console.log("executando instruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarEntidades(fkUsuario) {
    var instrucaoSql = `
        SELECT resultado, DATE_FORMAT(dataQuiz, '%d/%m') AS dataQuiz
        FROM tentativa
        JOIN quiz
        ON fkQuiz = idQuiz
        WHERE tipo = 'Entidades'
        AND fkUsuario = ${fkUsuario}
        ORDER BY dataQuiz;
    `;
    console.log("executando instruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarTotalQuizzes(fkUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalQuiz
        FROM tentativa
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("executando instruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarUltimaTentativa(fkUsuario) {
    var instrucaoSql = `
        SELECT DATE_FORMAT(dataQuiz, '%d/%m') AS dataQuiz
        FROM tentativa
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY idTentativa DESC
        LIMIT 1;
    `;
    console.log("executando intruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarMelhorResultado(fkUsuario) {
    var instrucaoSql = `
        SELECT MAX(resultado) AS melhor_resultado
        FROM tentativa
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("executando intruçao: ", instrucaoSql)
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarFundamentos,
    buscarOrixas,
    buscarEntidades,
    buscarTotalQuizzes,
    buscarUltimaTentativa,
    buscarMelhorResultado
}