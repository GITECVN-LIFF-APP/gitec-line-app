const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GasStationSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
})

module.exports = mongoose.model('GasStation', GasStationSchema)
