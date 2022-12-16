// Lib
import { useContext } from 'react'

// Components
import GasStation from '@components/GasStation'
import Header from '@components/Header'

// Contexts
import { ServiceContext } from '@contexts/serviceContext'

const GasStationPage = () => {
  const { setGasStation } = useContext(ServiceContext)

  const handleGetGasStation = (gasStation: string) => {
    setGasStation(gasStation)
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <GasStation onGetGasStation={handleGetGasStation} />
      </div>
    </>
  )
}

export default GasStationPage
