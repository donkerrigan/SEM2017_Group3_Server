var mongoose = require('mongoose')
var Schema = mongoose.Schema

var answerSchema = new Schema ({
  answerText: {
    type: String,
    required: true
  },
  linkedNodeIndex: {
    type: Number,
    required: true
  }
})

let Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer
