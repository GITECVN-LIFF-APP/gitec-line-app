var mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Business
let Services = new Schema(
  {
    nameService: {
      type: String,
    },
    gasStation: {
      type: String,
    },
    pickDateTime: {
      type: String,
    },
    selectedCar: {
      type: String,
    },
    idCustomer: {
      type: String,
    },
  },
  {
    collection: 'services',
  },
)

module.exports = mongoose.model('Services', Services)
