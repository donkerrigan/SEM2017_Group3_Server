var commandHandlers = require('./commandHandlers.js')
var Promise = require('bluebird')

var message = function (data) {
	
};

var login = function (data) {
	var that = this;
	var theData = JSON.parse(data);
	commandHandlers.login(theData).then(function (loginSuccess){
		console.log(loginSuccess.username, 'successfully logged in.');
		that.emit('login', loginSuccess);
	}).catch(function (){
		console.log('Login attempt failed.');
		that.emit('login', null);
	})
};

var signup = function (data) {
	var theData = JSON.parse(data);
	var that = this;
	commandHandlers.signup(theData).then(function (userObjectFound) {
		console.log(userObjectFound.username, 'account successfully created.');
		that.emit('signup', userObjectFound);
	}).catch(function (userObjectFound){
		that.emit('signup', userObjectFound);
	})
};

var loadscenario = function (data) {
	var that = this;
	var theData = JSON.parse(data);
	console.log(theData);
	commandHandlers.loadscenario(theData).then(function (loadedScenario){
		console.log(loadedScenario, 'Scenario successfully loaded');
		that.emit('loadscenario', loadedScenario);
	}).catch(function (){
		console.log('Unsuccessful load');
		that.emit('loadscenario', null);
	})
};

var savescenario = function (data) {
	var that = this;
	var theData = JSON.parse(data);
	console.log(theData);
	commandHandlers.savescenario(theData).then(function (saveResult){
		console.log(saveResult, 'Scenario Saved Successfully');
		that.emit('savescenario', saveResult);
	}).catch(function (){
		console.log('Scenario Save ERROR');
		that.emit('savescenario', null);
	})
};

var updatescenario = function(data) {
	var that = this;
	var theData = JSON.parse(data);
	commandHandlers.updatescenario(theData).then(function (updateResult) {
		console.log('Scenario Updated');
		that.emit('updatescenario', updateResult);
	}).catch(function() {
		console.log('Error updating scenario');
		that.emit('updatescenario', null);
	});
};

var deletescenario = function(data) {
	var that = this;
	var theData = JSON.parse(data);
	commandHandlers.deletescenario(theData).then(function (deleteResult) {
		console.log('Scenario Removed');
		that.emit('loadallscenarios', deleteResult);
	}).catch(function(){
		console.log('Error removing scenario')
		that.emit('loadallscenarios', null);
	});
};

var loadallscenarios = function (data) {
	var that = this;
	commandHandlers.loadallscenarios().then(function(loadResult) {
		console.log(loadResult, 'Loaded Scenarios');
		that.emit('loadallscenarios', loadResult);
	}).catch(function (loadResult) {
		console.log('Error loading scenarios', loadResult);
		that.emit('loadallscenarios', null);
	});
};

var updateuser = function (data) {
	var that = this;
	var theData = JSON.parse(data);
	commandHandlers.updateuser(theData).then(function(updateResult) {
		console.log('User Object Updated');
	}).catch(function (updateResult) {
		console.log('Error Updating User Object');
	});
};

var loadguide = function(data) {
	var that = this;
	var theData = JSON.parse(data);
	commandHandlers.loadguide(theData).then(function (loadResult) {
		console.log('Loaded Guide Successfully');
	}).catch(function(loadResult) {
		console.log('Error Loading Guide');
	});
};

var saveguide = function(data) {
	var that = this;
	var theData = JSON.parse(data);
	commandHandlers.saveguide(theData).then(function (saveResult) {
		console.log('Saved Guide Successfully');
	}).catch(function(saveResult) {
		console.log('Error Saving Guide');
	});
};

module.exports = {login, signup, message, loadscenario, savescenario, updatescenario, loadallscenarios, updateuser, deletescenario, loadguide, saveguide }