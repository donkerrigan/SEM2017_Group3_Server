var mongoose = require('mongoose')
var Schema = mongoose.Schema
var questionSchema = new Schema({
	questionText: {
		type: String,
		required: true
	},
	answers: [ {type: Schema.ObjectId, ref: 'Answer'} ]
})


module.exports = mongoose.model('Question', questionSchema)
