var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/fundamentos/:idUsuario", function(req, res){
    dashboardController.buscarFundamentos(req, res);
});

router.get("/orixas/:idUsuario", function(req, res){
    dashboardController.buscarOrixas(req, res);
});

router.get("/entidades/:idUsuario", function(req, res){
    dashboardController.buscarEntidades(req, res);
});

router.get("/totalQuizzes/:idUsuario", function(req, res){
    dashboardController.buscarTotalQuizzes(req, res);
});

router.get("/ultimaTentativa/:idUsuario", function(req, res){
    dashboardController.buscarUltimaTentativa(req, res);
});

router.get("/melhorResultado/:idUsuario", function(req, res){
    dashboardController.buscarMelhorResultado(req, res);
});

module.exports = router;