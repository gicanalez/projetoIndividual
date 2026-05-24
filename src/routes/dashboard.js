var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/fundamentos", function(req, res){
    dashboardController.buscarFundamentos(req, res);
});

module.exports = router;