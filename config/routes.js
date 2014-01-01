var ensureAuthenticated = require('./middlewares/auth').ensureAuthenticated,
    passport = require('passport');

module.exports = function (app, passport) {
	// Ping / pong, for healthchecking
	app.get('/ping', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0');
    res.send('pong');
  });

  // Serve up the index.
  app.get('/', function (req, res) {
    res.render('index', {data: "world"});
  });


  // Soundcloud auth
  app.get('/auth/soundcloud',
      passport.authenticate('soundcloud', {
        failureRedirect: "/login"
      }), function(req, res) {}
  );

  app.get('/auth/soundcloud/callback',
      passport.authenticate('soundcloud', {
        failureRedirect: "/login"
      }, function (req, res) {
        res.redirect('/test');
      })
  );

  app.get('/test', ensureAuthenticated, function (req, res) {
    res.render('index', {data: "SOUNDCLOUD"});
  });
};
