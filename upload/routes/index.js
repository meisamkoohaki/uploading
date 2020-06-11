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
        funct = "Adding";
        console.log(funct +": " + x + " + " + y + " = " + result);
        message = x + " + " + y + " = " + result;
    } else if (method == "multiple") {
        result = x * y;
        funct = "Multipling";
        console.log(funct + ": " + x + " * " + y + " = " + result);
        message = x + " * " + y + " = " + result;
    } else if (method == "subtract") {
        result = x - y;
        funct = "Subtracting";
        console.log(funct + ": " + x + " - " + y + " = " + result);
        message = x + " - " + y + " = " + result;
    } else if (method == "divide") {
        result = x / y;
        funct = "Dividing";
        console.log(funct + ": " + x + " / " + y + " = " + (Math.round(result * 100) / 100).toFixed(2));
        message = x + " / " + y + " = " + (Math.round(result * 100) / 100).toFixed(2);
    } else if (method == "" || method) {
        console.log("Error -------------<< input meyhod is wrong!>>");
        message = "Error -------------<< input meyhod is wrong!>>";
        funct = "Express";
    }


    res.render('shoombool', {
        title: funct,
        message: message 
    });

});

module.exports = router;
