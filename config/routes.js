module.exports = function (app) {
	// Hello, world!
	app.get('/ping', function (req, res) {
	  res.send('pong');
  });
};

