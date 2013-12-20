var express = require('express');

module.exports = function (app, config) {
	app.set('showStackError', config.showStackError || false);

	app.use(express.logger());
	app.use(express.static(config.root + '/public'));
}