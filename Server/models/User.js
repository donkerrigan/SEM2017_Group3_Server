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
	achievements: [{type: Schema.Types.Mixed}],
	scenarioStats: [{type: Schema.ObjectId, ref: 'ScenarioStat'}]
})


module.exports = mongoose.model('User', userSchema)
