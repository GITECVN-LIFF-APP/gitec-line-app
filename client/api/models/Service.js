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
})

module.exports = mongoose.model('Service', ServiceSchema)
