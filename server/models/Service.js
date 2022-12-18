const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
  nameService: {
    type: String,
    require: true,
    unique: true,
  },
  price: {
    type: Number,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Service', ServiceSchema)
