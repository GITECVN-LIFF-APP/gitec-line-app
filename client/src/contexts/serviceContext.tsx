// Lib
import { IService } from 'types/service'
import { createContext, ReactElement, useMemo, useState } from 'react'

// Types
import { IServiceContext } from 'types/serviceContext'
import { IGasStation } from 'types/gasStation'
import { ICar } from 'types/car'
import { IEvent } from 'types/events'

export const ServiceContext = createContext<IServiceContext>({} as IServiceContext)

type UserProviderProps = {
  children: ReactElement[] | ReactElement
}

const ServiceProvider = ({ children }: UserProviderProps) => {
  const [nameService, setNameService] = useState<string>('')
  const [gasStation, setGasStation] = useState<IGasStation>({} as IGasStation)
  const [pickDateTime, setPickDateTime] = useState<IEvent>({} as IEvent)
  const [selectedCar, setSelectedCar] = useState<ICar>({} as ICar)
  const [idCustomer, setIdCustomer] = useState<string>('')

  const serviveObj: IService = {
    nameService,
    gasStation,
    pickDateTime,
    selectedCar,
    idCustomer,
  }

  if (nameService !== '') {
    localStorage.setItem('service', JSON.stringify(serviveObj))
  }

  const value = useMemo(
    () => ({
      gasStation,
      setNameService,
      setGasStation,
      pickDateTime,
      setPickDateTime,
      setSelectedCar,
      setIdCustomer,
      serviveObj,
    }),
    [setNameService, setIdCustomer, setGasStation, setPickDateTime, setSelectedCar, serviveObj],
  )

  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
}

export default ServiceProvider