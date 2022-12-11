const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarSchema = new Schema({
  nameCar: {
    type: String,
  },
  typeCar: {
    type: String,
  },
  licensePlate: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Car', CarSchema)
