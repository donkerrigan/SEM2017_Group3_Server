module.exports = function () {
	var commands = [];
	commands.push('message');
	commands.push('login');
	commands.push('signup');
	commands.push('loadscenario');
	commands.push('savescenario');
	commands.push('updatescenario');
	return commands;
}