var mongoose = require('mongoose')
var Schema = mongoose.Schema
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
})


module.exports = mongoose.model('Achievement', achievementSchema)
