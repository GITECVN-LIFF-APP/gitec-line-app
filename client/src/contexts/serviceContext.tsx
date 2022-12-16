// Lib
import { IService } from 'types/service'
import { createContext, ReactElement, useMemo, useState } from 'react'

// Types
import { IServiceContext } from 'types/serviceContext'

export const ServiceContext = createContext<IServiceContext>({} as IServiceContext)

type UserProviderProps = {
  children: ReactElement[] | ReactElement
}

const ServiceProvider = ({ children }: UserProviderProps) => {
  const [nameService, setNameService] = useState<string>('')
  const [gasStation, setGasStation] = useState<string>('')
  const [pickDateTime, setPickDateTime] = useState<string>('')
  const [selectedCar, setSelectedCar] = useState<string>('')
  const [idCustomer, setIdCustomer] = useState<string>('')

  // setNameService(nameService, ...nameService)

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

  // console.log(serviveObj, 'serviveObj 12345')

  const value = useMemo(
    () => ({
      setNameService,
      setGasStation,
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
