var User = require('./models/User.js');
var Scenario = require('./models/Scenario.js');
var Guide = require('./models/Guide.js');
var Promise = require('bluebird');

/*
 * This file contains all of the logic needed to perform incoming tasks in the ioHandlers file.
 */

/*
 * This method simply prints the recieved data to the console and returns the same data.
 */
var message = function (data) {
	console.log(data);
	return data;
};

/*
 * This method contains the logic in order to search for an user object on the database and check if their password is correct.
 * If the user object exists and the password is correct this method returns the full user object.
 */
var login = function (data) {
	return new Promise(function (resolve, reject) {
		User.findOne({username: data.username}, function (error, userfound) {
			if (error) {
				console.log(error);
				reject(null);
			}
		}).then(function (userfound) {
			if(!userfound){
				console.log('Username not found on database');
				reject(null);
			}
			if(userfound && userfound.password === data.password){
				console.log('username found and password matches');
				resolve(userfound);
			}
			else {
				reject(null);
			}
		});
	});
};

/*
 * This method contains the logic in order to search for an user object on the database.
 * If the user object exists then it returns a null object, if it does not it creates a new user object on the database and returns it.
 */
var signup = function (data) {
	return new Promise(function (resolve, reject) {
		if (data["password"].length === 0 || (data["username"].length === 0))
			reject(false);

		var user = new User();
		user.password = data.password;
		user.username = data.username;
		user.admin = data.admin;
		user.achievements = data.achievements;
		user.scenarioStats = data.scenarioStats;
	
		User.findOne({username: user.username}, function (error, userfound){
			if (error) {
				console.log(error);
				reject(null);
			}
		}).then(function (userfound) {
			if(userfound){
				reject(null);
			}
			else {
				user.save(function (error) {
					console.log('Creating account for:', user);
					resolve(user);
				});
			}
		});
	});
};

/*
 * This method contains the logic to find a scenario on the server based on the title of the scenario object passed in.
 * If the scenario exists it returns the full object.
 * If the scenario does not exist it returns a null object.
 */
var loadscenario = function (data) {
	return new Promise(function(resolve, reject){
		Scenario.findOne({title: data.title}, function(error, scenarioFound) {
			if(error){
				console.log(error);
				reject(null);
			}
		}).then(function (scenarioFound) {
			if(!scenarioFound){
				console.log('No Scenario found');
				reject(null);
			}
			else if(scenarioFound){
				console.log('Scenario found');
				resolve(scenarioFound);
			}
			else{
				reject(null);
			}
		});
	});
};

/*
 * This method conatains the logic for saving a new Scenario object on the database.
 * If there is already a scenario with the same title, it returns a null object.
 * If the Scenario was saved properly, it returns the Scenario object.
 */
var savescenario = function (data) {
	return new Promise(function(resolve, reject){
		var scenario = new Scenario();
		scenario.title = data.title;
		Scenario.findOne({title: scenario.title}, function(error, scenarioFound){
			console.log("Saving Scenario....")
			if(error){
				console.log(error);
				reject(null);
			}
		}).then(function(scenarioFound) {
			if(scenarioFound){
				reject(null);
			}
			else{
				scenario.title = data.title;
				scenario.questions = data.questions;
				scenario.questionCount = data.questionCount;
				scenario.startIndex = data.startIndex;
				scenario.save(function(error){
					console.log('Saving Scenario', scenario.title);
					resolve(scenario);
				});
			}
		});
	});
};

/*
 * This method contains the logic of finding an existing Scenario object on the database and updating its variables.
 * If the scenario was updated properly it returns the updated scenario object.
 * If there was an error it returns a null object.
 */
var updatescenario = function (data) {
	return new Promise(function(resolve, reject) {
		Scenario.updateOne({title: data.title}, {questions: data.questions, userScores: data.userScores, questionCount: data.questionCount, startIndex: data.startIndex}, function(error, scenarioFound) {
			console.log('Updating Scenario...');
			if(error){
				console.log('There is an error');
				reject(null);
			}
			resolve(data);
		});
	});
};

/*
 * This method contains the logic of finding an existing scenario on the database and deleting the object.
 * If the scenario was removed successfully, it returns all existing scenarios on the database.
 * If the scenario was not successfully removed, it returns a null object.
 */
var deletescenario = function(data) {
	return new Promise(function(resolve, reject) {
		Scenario.remove({title: data.title} ,function(error, deleteResult) {
			console.log('Removing scenario...');
			if(error){
				console.log('There was an error removing scenario');
				reject(null);
			}
		}).then(function () {
			Scenario.find({}, function(error, scenariosFound) {
				console.log('Loading all scenarios');
				if(error){
					console.log('Error loading all scenarios');
					reject(null);
				}
			}).then(function (scenariosFound) {
				console.log('Load all scenarios successful');
				resolve(scenariosFound);
			});
		});
	});
};

/*
 * This method contains the logic for finding all scenarios on the database and returning them in an array.
 * If an error occurs, it returns a null object.
 */
var loadallscenarios = function() {
	return new Promise(function (resolve, reject) {
		Scenario.find({}, function(error, scenariosFound) {
			console.log('Loading all scenarios');
			if(error){
				console.log('Error loading all scenarios');
				reject(null);
			}
		}).then(function (scenariosFound) {
			console.log('Load all scenarios successful');
			resolve(scenariosFound);
		});
	});
};

/*
 * This method contains the logic for updating a user object on the database with the same username passed in.
 * If the user object exists, it updates the database variables and returns the updated user object.
 * If there was an error updating the user object, it returns a null object.
 */
var updateuser = function(data) {
	return new Promise(function (resolve, reject) {
		User.updateOne({username: data.username}, {achievements: data.achievements, scenarioStats: data.scenarioStats}, function(error, updateResult) {
			console.log('Updating User data...');
			if(error){
				console.log(error);
				reject(null);
			}
			resolve(data);
		});
	});
};

/*
 * This method contains the logic for finding the first stored guide on the database and returning it.
 * If there was an error, or there was no guide found, it returns a null object.
 */
var loadguide = function (data) {
	return new Promise(function(resolve, reject){
		Guide.findOne({}, function(error, guideFound) {
			if(error){
				console.log(error);
				reject(null);
			}
		}).then(function (guideFound) {
			if(!guideFound){
				console.log('No Guide found');
				reject(null);
			}
			else if(guideFound){
				console.log('Guide found');
				resolve(guideFound);
			}
			else{
				reject(null);
			}
		});
	});
};

/*
 * This methos contains the logic for finding the first guide object on the database and updating its variables.
 * If there was an error, or the guide object was not found, it returns a null object.
 */
var saveguide = function (data) {
	return new Promise(function(resolve, reject) {
		Guide.updateOne({}, {guideDescription: data.guideDescription}, function(error, guideFound) {
			console.log('Updating Guide...');
			if(error){
				console.log('There is an error');
				reject(null);
			}
			resolve(data);
		});
	});
};

module.exports = {login, signup, message, loadscenario, savescenario, updatescenario, loadallscenarios, updateuser, deletescenario, loadguide, saveguide }
