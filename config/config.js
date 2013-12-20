var path = require('path'),
	rootPath = path.normalize(__dirname + '/..')

module.exports = {
	
	// Development environment config
	development: {
		port: 3000,
		stackError: true,
		root: rootPath
	},

	// Test environment config
	test: {
		port: 3000,
		root: rootPath
	}
}