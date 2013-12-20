"use strict";

// Imports
var express = require('express');
var app = express();

// Configs
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env]



// Start the app by listening on <port>
var port = process.env.PORT || config.port; //Todo: replace 3000 with config.port
app.listen(port)
console.log('Express app started on port '+port)

// Expose app	
exports = module.exports = app;