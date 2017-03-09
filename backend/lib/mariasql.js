const client = require('mariasql');

module.exports = new client({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	db: 'plantingSystem'
});
