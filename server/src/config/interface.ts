import { Document } from 'mongoose'

export interface IUser extends Document {
  userId: string
  name: string
  furigana: string
  address: string
  phoneNumber: string
  createAt: Date
  _doc: Object
}

export interface ICalendar extends Document {
  serviceId: string
  startDateTime: Date
  endDateTime: Date
  status: string
  allDate: boolean
  userId: string
  createAt: Date
  deleteAt: Date
  updateAt: Date
  gasStationId: number
  _doc: Object
}

export interface IProfile extends Document {
  name: string
  furigana: string
  email: string
  address: string
  _doc: Object
}

export interface ICar extends Document {
  nameCar: string
  typeCar: string
  licensePlate: string
  userId: string
  _doc: Object
}

export interface IGas extends Document {
  name: string
  address: string
  phoneNumber: string
  latitude: string
  longitude: string
  _doc: Object
}

export interface ISchedule extends Document {
  idCar: string
  dateTime: Date
  nameService: string
  idGasStation: string
  _doc: Object
}

export interface IService extends Document {
  nameService: String
  price: Number
}
