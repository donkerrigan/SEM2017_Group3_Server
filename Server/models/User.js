var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Object model for a User from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
var userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		required: true
	},
	achievements: [{type: Schema.Types.Mixed}],
	scenarioStats: [{type: Schema.Types.Mixed}]
});


module.exports = mongoose.model('User', userSchema);
