import { IGasStation } from './gasStation'

export interface IService {
  nameService: string
  gasStation: IGasStation | undefined
  pickDateTime: string
  selectedCar: string
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
