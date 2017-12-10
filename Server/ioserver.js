var ioHandlers = require('./ioHandlers.js');
var commands = require('./commands.js')();
var database = require('./database/database.js');

/*
 * This file organizes and connects all of the commands to the ioHandlers.
 * It also opens the server socket that will handle all communication to the connected client application.
 */
var create = function (server) {
	var io = require('socket.io')(server);
  
	io.on('connection', function (client) {
		commands.map((command) => {
			client.on(command, ioHandlers[command]);
		});
		io.emit('broadcast', client.id + ' has connected');
	});
  
	return io;
}

module.exports = create;
