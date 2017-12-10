/*
 * This file simply contains all of the commands that the server will listen for and returns them in an array.
 */
module.exports = function () {
	var commands = [];
	commands.push('message');
	commands.push('login');
	commands.push('signup');
	commands.push('loadscenario');
	commands.push('savescenario');
	commands.push('updatescenario');
	commands.push('loadallscenarios');
	commands.push('updateuser');
	commands.push('deletescenario');
	commands.push('loadguide');
	commands.push('saveguide');
	return commands;
}