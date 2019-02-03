var path = require('path');
var rootPath = path.normalize(__dirname + '/../'); // normalizes to base path

module.exports = {
	development: {
		rootPath: rootPath,
		database: 'mongodb://localhost:27017/node-demo',
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
		database: 'mongodb://localhost:27017/node-demo',
		port: process.env.PORT || 3000
	}
};