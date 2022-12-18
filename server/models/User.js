const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  userId: {
    type: String,
    require: true,
    unique: true,
  },  
  name: {
    type: String,
  },
  furigana: {
    type: String,
  },
  address:{
    type: String
  },
  phoneNumber:{
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', UserSchema)
