import { IGas } from './../config/interface'
import { Schema, model } from 'mongoose'

const GasStationSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  }
})

export const GasStationModel = model<IGas>('GasStation', GasStationSchema)
