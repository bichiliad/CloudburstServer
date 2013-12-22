"use strict"; // AIN'T NO MESSIN AROUND.

// Imports
var express = require('express');
var passport = require('passport');

// Other useful globals
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

// Express
console.log('===   Configuring Express   ===');
var app = express();
require('./config/express')(app, config);

// Routes
console.log('===   Configuring Routes    ===');
require('./config/routes')(app);

// Templating
console.log('===   Configuring Templates ===');
require('./config/hbs.js')(app, config);

// Passport
console.log('===   Configuring Passport  ===');
require('./config/passport.js')

// Start the app by listening on <port>
var port = process.env.PORT || config.port || 3000;
app.listen(port);
console.log('\nCloudburst started on port ' + port);
console.log('running in ' + env + ' environment.');

// Expose app
exports = module.exports = app;
