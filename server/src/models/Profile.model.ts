import { IProfile } from './../config/interface'
import { Schema, model } from 'mongoose'

const ProfileSchema = new Schema({
  name: {
    type: String
  },
  furigana: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  }
})

export const ProfileModel = model<IProfile>('Profile', ProfileSchema)
