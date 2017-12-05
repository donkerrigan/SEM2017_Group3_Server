var mongoose = require('mongoose')
var Schema = mongoose.Schema
var scenarioStatSchema = new Schema({
	highScore: {
		type: Number,
		required: true
	},
	scenarioName: {
		type: String,
		required: true
	},
	complete: {
		type: Boolean,
		required: true
	}
})


module.exports = mongoose.model('ScenarioStat', scenarioStatSchema)
