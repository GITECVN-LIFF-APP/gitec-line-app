// Lib
import { useContext } from 'react'

// Components
import CarModal from '@components/CarModal'
import Header from '@components/Header'

// Contexts
import { ServiceContext } from '@contexts/serviceContext'
import useSWR from 'swr'
import { fetcher } from '@constants/fetch'
import { ICar } from 'types/car'
import { IMember } from 'types/member'

const CarSelection = () => {
  const userSestion: IMember = JSON.parse(localStorage.getItem('userSession') || 'null')

  // const userId = userSestion && userSestion.lineId
  const userId = 'U33da544286a27dc45a6369fd63a0a30a'

  console.log(userId)

  const { data: cars, error } = useSWR<ICar[]>(
    userId && `https://sandy-halved-pleasure.glitch.me/car?userId=${userId}`,
    fetcher,
  )

  console.log(cars)

  const { setSelectedCar } = useContext(ServiceContext)

  const handleGetCarSelection = (carSelectionId: string) => {
    setSelectedCar(carSelectionId)
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        {cars &&
          cars.map((car: ICar) => {
            <CarModal car={car} onGetCarSelectionId={handleGetCarSelection} />
          })}
      </div>
    </>
  )
}
export default CarSelection
