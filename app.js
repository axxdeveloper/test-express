var express = require('express');
var serveStatic =  require('serve-static');
var app = express().use(  serveStatic(__dirname + '/public', {'index': ['lalala.html']})  ).listen(3000);
