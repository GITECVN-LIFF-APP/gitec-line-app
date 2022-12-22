import { ISchedule } from './../config/interface'
import { Schema, model } from 'mongoose'

const ScheduleSchema = new Schema({
  idCar: {
    type: String,
    require: true,
    unique: true
  },
  dateTime: {
    type: Date,
    default: Date.now
  },
  nameService: {
    type: String
  },
  idGasStation: {
    type: String
  }
})

export const ScheduleModel = model<ISchedule>('Schedule', ScheduleSchema)
