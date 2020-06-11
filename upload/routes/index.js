'use strict';
var express = require('express');
var router = express.Router();
var message = "";
var funct = "Express";

/* GET home page. */
router.get('/', function (req, res) {

    var result = 0;
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    var method = req.query.method;

    if (method == "add") {
        result = x + y;
        console.log(x + " + " + y + " = " + result);
        message = x + " + " + y + " = " + result;
        funct = "Adding";
    } else if (method == "multiple") {
        result = x * y;
        console.log(x + " * " + y + " = " + result);
        message = x + " * " + y + " = " + result;
        funct = "Multipling";
    } else if (method == "subtract") {
        result = x - y;
        console.log(x + " - " + y + " = " + result);
        message = x + " - " + y + " = " + result;
        funct = "Subtracting";
    } else if (method == "divide") {
        result = x / y;
        console.log(x + " / " + y + " = " + (Math.round(result * 100) / 100).toFixed(2));
        message = x + " / " + y + " = " + (Math.round(result * 100) / 100).toFixed(2);
        funct = "Dividing";
    } else if (method == "" || method) {
        console.log("Error -------------<< input meyhod is wrong!>>");
        message = "Error -------------<< input meyhod is wrong!>>";
        funct = "Express";
    }


    res.render('index', {
        title: funct,
        message: message 
    });
});

module.exports = router;
