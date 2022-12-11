const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScheduleSchema = new Schema({
  idCar: {
    type: String,
    require: true,
    unique: true,
  },
  dateTime: {
    type: Date,
  },
  nameService: {
    type: String,
  },
  idGasStation: {
    type: Number,
  },
})

module.exports = mongoose.model('Schedule', ScheduleSchema)
