var database = require('mongoose');
database.Promise = require('bluebird');
console.log('Initializing database connection...');
/*
 * This file is used to establish a connection to the database located at the provided MONGODB_URI variable for the database.
 */
try {
	database.connect(process.env.MONGODB_URI);
	console.log('Connection to database successful');
} catch (err) {
	database.createConnection(process.env.MONGODB_URI);
}

module.exports = database;
