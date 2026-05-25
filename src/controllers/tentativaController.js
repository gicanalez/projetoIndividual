var tentativaModel = require("../models/tentativaModel");

function cadastrar(req, res){
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;
    var resultado = req.body.resultadoServer

    tentativaModel.cadastrar(fkUsuario, fkQuiz, resultado)
        .then(function(resultado){
            res.json(resultado)
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro)
        });
}

module.exports = {
    cadastrar
}