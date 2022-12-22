import { Schema, model } from 'mongoose'
import { IService } from '../config/interface'

const ServiceSchema: Schema = new Schema({
  nameService: {
    type: String,
    require: true,
    unique: true
  },
  price: {
    type: Number
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export const ServiceModel = model<IService>('Service', ServiceSchema)
