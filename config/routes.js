module.exports = function (app) {
	// Ping / pong, for healthchecking
	app.get('/ping', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0');
    res.send('pong');
  });

  // Serve up the index.
  app.get('/', function (req, res) {
    res.render('index', {data: "world"})
  })
};

