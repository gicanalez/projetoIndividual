var dashboardModel = require("../models/dashboardModel");

function buscarFundamentos(req, res) {
    let idUsuario = req.params.idUsuario;

    dashboardModel.buscarFundamentos(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro)
        })
}

function buscarOrixas(req, res) {
    let idUsuario = req.params.idUsuario;

    dashboardModel.buscarOrixas(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro)
        })
}

function buscarEntidades(req, res) {
    let idUsuario = req.params.idUsuario;

    dashboardModel.buscarEntidades(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro)
        })
}

function buscarTotalQuizzes(req, res) {
    let idUsuario = req.params.idUsuario;

    dashboardModel.buscarTotalQuizzes(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro)
        })
}

function buscarUltimaTentativa(req, res) {
    let idUsuario = req.params.idUsuario;

    dashboardModel.buscarUltimaTentativa(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro)
        })
}

function buscarMelhorResultado(req, res) {
    let idUsuario = req.params.idUsuario;

    dashboardModel.buscarMelhorResultado(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro)
        })
}

module.exports = {
    buscarFundamentos,
    buscarEntidades,
    buscarOrixas,
    buscarMelhorResultado,
    buscarTotalQuizzes,
    buscarUltimaTentativa
}