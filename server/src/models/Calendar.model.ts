
import { ICalendar } from './../config/interface'
import { Schema, model } from 'mongoose'

const CalendarSchema = new Schema({
  serviceId: {
    type: String,
    require: true,
    unique: true
  },
  startDateTime: {
    type: Date
  },
  endDateTime: {
    type: Date
  },
  status: {
    type: String
  },
  allDate: {
    type: Boolean
  },
  userId: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  deleteAt: {
    type: Date
  },
  updateAt: {
    type: Date
  },
  gasStationId: {
    type: String
  }
})

export const CalendarModel = model<ICalendar>('Calendar', CalendarSchema)
