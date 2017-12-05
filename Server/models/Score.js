var mongoose = require('mongoose')
var Schema = mongoose.Schema
var scoreSchema = new Schema({
	highScore: {
		type: Number,
		required: true
	},
	userName: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Score', scoreSchema)
