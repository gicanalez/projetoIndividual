var dashboardModel = require("../models/dashboardModel");

function buscarFundamentos(req, res){

    dashboardModel.buscarFundamentos()
    .then(function(resultado){
        res.json(resultado);
    })
    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro)
    })
}

module.exports = {
    buscarFundamentos
}