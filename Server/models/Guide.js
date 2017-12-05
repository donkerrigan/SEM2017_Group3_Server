var mongoose = require('mongoose')
var Schema = mongoose.Schema
var guideSchema = new Schema({
	guideDescription: {
		type: String,
		required: true
	}
})


module.exports = mongoose.model('Guide', guideSchema)
