"use strict"; // AIN'T NO MESSIN AROUND.

// Imports
var express = require('express')
  , passport = require('passport')
  , mongoose = require('mongoose');

// Other useful globals
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env];

// Get some API keys. Be nice and make sure they made their own keys file.
var keys;
  try { 
    keys = require('./config/keys');
  } 
  catch (err) {
    if(err.code === 'MODULE_NOT_FOUND'){
      console.error("\n\nMake sure you've created config/keys.js\n", err, "\n\n");
      return;
    } 
    else throw err;
  }

// Express
console.log('===   Configuring Express   ===');
var app = express();
require('./config/express')(app, config);

// Mongo! Yeah!
mongoose.connect(config.db);

// Routes
console.log('===   Configuring Routes    ===');
require('./config/routes')(app);

// Templating
console.log('===   Configuring Templates ===');
require('./config/hbs.js')(app, config);

// Passport
console.log('===   Configuring Passport  ===');
// require('./config/passport.js')

// Start the app by listening on <port>
var port = process.env.PORT || config.port || 3000;
app.listen(port);
console.log('\nCloudburst started on port ' + port);
console.log('running in ' + env + ' environment.');

// Expose app
exports = module.exports = app;
