var express = require('express');

module.exports = function (app, config) {
    app.set('showStackError', config.showStackError || true);

    app.use(express.logger());
    app.use(express.static(config.root + '/public'));

    // set views path, template engine and default layout
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'ejs');
};
