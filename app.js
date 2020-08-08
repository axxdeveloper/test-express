var express = require('express');
var bodyParser = require('body-parser')
var app = express()
    .use( '/test', bodyParser() ).use(function (req, res) {
        console.log("body", req.body)
        console.log("foo", req.body.foo)
        res.send(req.body)
    })
    .listen(3000);
