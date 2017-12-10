var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Object model for a Question from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
var questionSchema = new Schema({
	questionText: {
		type: String,
		required: true
	},
	answers: [ {type: Schema.ObjectId, ref: 'Answer'} ],
	isQuestion: {
		type: Boolean,
		required: true
	}
});


module.exports = mongoose.model('Question', questionSchema);
