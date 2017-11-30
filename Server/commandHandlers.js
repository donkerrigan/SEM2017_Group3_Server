var User = require('./models/User.js')
var Scenario = require('./models/Scenario.js')
var Promise = require('bluebird')

var message = function (data) {
	console.log(data);
	return data;
};

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
		})
	})
};

var signup = function (data) {
	return new Promise(function (resolve, reject) {
		if (data["password"].length === 0 || (data["username"].length === 0))
			reject(false);

		var user = new User();
		user.password = data.password;
		user.username = data.username;
		user.admin = data.admin;
	
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
				})
			}
		})
	})
};

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
		})
	})
};

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
				})
			}
		})
	})
};

module.exports = {login, signup, message, loadscenario, savescenario}
