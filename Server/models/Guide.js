var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Object model for a Guide from the client application.
 * THIS MUST MATCH THE CLIENT OBJECT TO BE STORED AND UPDATED PROPERLY.
 */
var guideSchema = new Schema({
	guideDescription: {
		type: String,
		required: true
	}
});


module.exports = mongoose.model('Guide', guideSchema);
