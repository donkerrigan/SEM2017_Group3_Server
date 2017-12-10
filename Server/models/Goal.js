var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Object model for a Goal from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
var goalSchema = new Schema({
	goalDescription: {
		type: String,
		required: true
	},
	goalID: {
		type: String,
		required: true
	},
	progressToMeet: {
		type: Number,
		required: true
	},
	progressMade: {
		type: Number,
		required: true
	},
	goalMet:{
		type: Boolean,
		required: true
	}
});


module.exports = mongoose.model('Goal', goalSchema);
