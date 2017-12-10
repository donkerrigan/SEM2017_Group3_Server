var server = require('http').createServer();
var io = require('./Server/ioserver.js')(server);
var port = process.env.PORT || 3000;

/*
 * This file is the driver for the server application and is what starts the server's listeners.
 */
server.listen(port)

console.log('Server is up and listening on port:', port)
