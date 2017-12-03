var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		required: true
	},
	achievements: [ {type: Schema.ObjectId, ref: 'Achievement'} ]
})


module.exports = mongoose.model('User', userSchema)
