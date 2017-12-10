var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Object model for an Answer from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
var answerSchema = new Schema ({
	answerText: {
		type: String,
		required: true
	},
	linkedNodeIndex: {
		type: Number,
		required: true
	}
});

let Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
