var express = require("express");
var router = express.Router();

router.get("/jornada", function (req, res) {
    res.render("jornada");
});

module.exports = router;