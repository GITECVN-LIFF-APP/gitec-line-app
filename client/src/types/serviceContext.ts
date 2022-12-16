// Types
import { IService } from './service'

export interface IServiceContext {
  setNameService: Function
  setGasStation: Function
  setPickDateTime: Function
  setSelectedCar: Function
  setIdCustomer: Function
  serviveObj: IService
}
