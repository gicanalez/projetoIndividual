var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/fundamentos", function(req, res){
    dashboardController.buscarFundamentos(req, res);
});

router.get("/orixas", function(req, res){
    dashboardController.buscarOrixas(req, res);
});

router.get("/entidades", function(req, res){
    dashboardController.buscarEntidades(req, res);
});

module.exports = router;