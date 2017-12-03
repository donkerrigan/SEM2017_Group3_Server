var mongoose = require('mongoose')
var Schema = mongoose.Schema
var scenarioSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	questions: [{type: Schema.Types.Mixed}],
	userScores: [{type: Schema.ObjectID, ref: 'Score'}],
	questionCount: {
		type: Number,
		required: true
	},
	startIndex: {
		type: Number,
		required: true
	}
})


module.exports = mongoose.model('Scenario', scenarioSchema)
