module.exports = function (app) {
	// Hello, world!
	app.get('/ping', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0');
    res.send('pong');
  });
};

