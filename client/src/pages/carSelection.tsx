// Lib
import { useContext } from 'react'

// Components
import CarModal from '@components/CarModal'
import Header from '@components/Header'

// Contexts
import { ServiceContext } from '@contexts/serviceContext'

const CarSelection = () => {
  const { setSelectedCar } = useContext(ServiceContext)

  const handleGetCarSelection = (carSelectionId: string) => {
    setSelectedCar(carSelectionId)
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <CarModal onGetCarSelectionId={handleGetCarSelection} />
      </div>
    </>
  )
}
export default CarSelection
