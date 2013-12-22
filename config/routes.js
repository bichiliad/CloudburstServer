module.exports = function (app) {
	// Hello, world!
	app.get('/', function (req, res) {
		res.render('index', {data: 'world'});
	});
};

