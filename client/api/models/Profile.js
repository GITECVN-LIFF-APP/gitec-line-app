const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
  name: {
    type: String,
  },
  furigana: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
})

module.exports = mongoose.model('Profile', ProfileSchema)
