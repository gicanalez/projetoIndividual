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

function buscarOrixas(req, res){

    dashboardModel.buscarOrixas()
    .then(function(resultado){
        res.json(resultado);
    })
    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro)
    })
}

function buscarEntidades(req, res){

    dashboardModel.buscarEntidades()
    .then(function(resultado){
        res.json(resultado);
    })
    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro)
    })
}

module.exports = {
    buscarFundamentos,
    buscarEntidades,
    buscarOrixas
}