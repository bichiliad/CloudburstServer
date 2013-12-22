var ejs = require('ejs');

module.exports = function(config) {
  // Custom delimeters
  ejs.open = '{{';
  ejs.close = '}}';
};
