import { ICar } from './car'
import { IEvent } from './events'
import { IGasStation } from './gasStation'

export interface IService {
  nameService: string
  gasStation: IGasStation
  pickDateTime: IEvent
  selectedCar: ICar
  idCustomer: string
}

export interface IserviceDB {
  id: string
  name: string
  image: string
  link: string
  source: string
  price: string
}
