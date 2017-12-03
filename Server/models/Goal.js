var mongoose = require('mongoose')
var Schema = mongoose.Schema
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
})


module.exports = mongoose.model('Goal', goalSchema)
