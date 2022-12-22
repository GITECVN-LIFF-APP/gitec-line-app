import { ICar } from './../config/interface'
import { Schema, model } from 'mongoose'

const CarSchema = new Schema({
  nameCar: {
    type: String
  },
  typeCar: {
    type: String
  },
  licensePlate: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})
export const CarModel = model<ICar>('Car', CarSchema)
