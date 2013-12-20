"use strict"; // AIN'T NO MESSIN AROUND.

// Imports
var express = require('express');

// Configs
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env]

// Express
var app = express();
require('./config/express')(app, config);

// Routes
require('./config/routes')(app);


// Start the app by listening on <port>
var port = process.env.PORT || config.port || 3000;
app.listen(port)
console.log('Cloudburst started on port ' + port)

// Expose app	
exports = module.exports = app;