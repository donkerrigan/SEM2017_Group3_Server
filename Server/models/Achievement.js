var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
 * Object model for an Achievement from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
var achievementSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	achievementDescription: {
		type: String,
		required: true
	},
	numberOfGoals: {
		type: Number,
		required: true
	},
	goals: [ {type: Schema.ObjectId, ref: 'Goal'} ],
	imageFileName: {
		type: String,
		required: true
	},
	isUnlocked: {
		type: Boolean,
		required: true
	}
});


module.exports = mongoose.model('Achievement', achievementSchema);
