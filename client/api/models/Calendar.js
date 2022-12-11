const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CalendarSchema = new Schema({
  serviceId: {
    type: String,
    require: true,
    unique: true,
  },
  startDateTime: {
    type: Date,
  },
  endDateTime: {
    type: Date,
  },
  status: {
    type: String,
  },
  allDate: {
    type: Boolean,
  },
  userId: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  deleteAt: {
    type: Date,
  },
  updateAt: {
    type: Date,
  },
  gasStationId: {
    type: Number,
  },
})

module.exports = mongoose.model('Calendar', CalendarSchema)