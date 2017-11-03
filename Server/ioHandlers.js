var commandHandlers = require('./commandHandlers.js')
var Promise = require('bluebird')

var message = function (data) {
	
}

var login = function (data) {
  var that = this
  var theData = JSON.parse(data)
  commandHandlers.login(theData).then(function (loginSuccess){
    console.log(loginSuccess.username, 'successfully logged in.')
    that.emit('login', loginSuccess)
  }).catch(function (){
    console.log('Login attempt failed.')
    that.emit('login', null)
  })
}

var signup = function (data) {
var theData = JSON.parse(data)
  var that = this
  commandHandlers.signup(theData).then(function (userObjectFound) {
    console.log(userObjectFound.username, 'account successfully created.')
    that.emit('signup', userObjectFound)
  }).catch(function (userObjectFound){
    that.emit('signup', userObjectFound)
  })
}

var loadscenario = function (data) {
	var that = this
	var theData = JSON.parse(data)
	console.log(theData)
	commandHandlers.loadscenario(theData).then(function (loadedScenario){
		console.log(loadedScenario, 'Scenario successfully loaded')
		that.emit('loadscenario', loadedScenario)
	}).catch(function (){
		console.log('Unsuccessful load')
		that.emit('loadscenario', null)
	})
}

var savescenario = function (data) {
	var that = this
	var theData = JSON.parse(data)
		console.log("Saving Scenario....")
	commandHandlers.loadscenario(theData).then(function (saveResult){
		console.log(saveResult, 'Scenario Saved Successfully')
		that.emit('savescenario', saveResult)
	}).catch(function (){
		console.log('Scenario Save ERROR')
		that.emit('savescenario', null)
	})
}

module.exports = {login, signup, message, loadscenario, savescenario}