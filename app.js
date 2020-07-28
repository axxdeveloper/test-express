var express = require('express');
var app = express().use(  express.static(__dirname + '/public', {'index': ['lalala.html']})  ).listen(3000);
