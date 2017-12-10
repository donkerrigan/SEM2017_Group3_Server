var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Object model for a ScenarioStat from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
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
});


module.exports = mongoose.model('ScenarioStat', scenarioStatSchema);
