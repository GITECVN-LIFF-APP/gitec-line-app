var mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Business
const Members = new Schema(
  {
    name: {
      type: String,
    },
    furigana: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  {
    collection: 'members',
  },
)

module.exports = mongoose.model('Members', Members)
