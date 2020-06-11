'use strict';
var express = require('express');
var router = express.Router();
var message = "";

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
    } else if (method == "multiple") {
        result = x * y;
        console.log(x + " * " + y + " = " + result);
        message = x + " * " + y + " = " + result;
    } else if (method == "subtract") {
        result = x - y;
        console.log(x + " - " + y + " = " + result);
        message = x + " - " + y + " = " + result;
    } else if (method == "divide") {
        result = x / y;
        console.log(x + " / " + y + " = " + result);
        message = x + " / " + y + " = " + result;
    } else if (method == "" || method) {
        console.log("Error -------------<< input meyhod is wrong!>>");
        message = "Error -------------<< input meyhod is wrong!>>";
    }


    res.render('index', {
        title: 'Express',
        message: message 
    });
});

module.exports = router;
