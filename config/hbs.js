var hbs = require('express-hbs');

module.exports = function(app, config) {

  // Use `.hbs` for extensions and find partials in `views/partials`.
  app.engine('hbs', hbs.express3({
    partialsDir: config.root + '/app/views/partials',
    contentHelperName: 'content',
  }));

  app.set('view engine', 'hbs');
  app.set('views', config.root + '/app/views');

};
