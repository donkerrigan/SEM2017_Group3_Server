var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Object model for a Score from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
var scoreSchema = new Schema({
	highScore: {
		type: Number,
		required: true
	},
	userName: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Score', scoreSchema);
