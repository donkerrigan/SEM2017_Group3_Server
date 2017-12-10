var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Object model for a Scenario from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
var scenarioSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	questions: [{type: Schema.Types.Mixed}],
	userScores: [{type: Schema.ObjectId, ref: 'Score'}],
	questionCount: {
		type: Number,
		required: true
	},
	startIndex: {
		type: Number,
		required: true
	}
});


module.exports = mongoose.model('Scenario', scenarioSchema);
