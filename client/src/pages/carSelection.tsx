// Lib
import { useContext, useEffect, useState } from 'react'

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
  const [listCar, setListCar] = useState<ICar[]>()

  const userSestion: IMember = JSON.parse(localStorage.getItem('userSession') || 'null')

  // const userId = userSestion && userSestion.lineId
  const userId = 'U33da544286a27dc45a6369fd63a0a30a'

  const { data: cars, error } = useSWR<ICar[]>(
    `https://sandy-halved-pleasure.glitch.me/car?userId=${userId}`,
    fetcher,
  )

  useEffect(() => {
    if (cars) {
      setListCar(cars)
    }
  }, [cars])

  const { setSelectedCar } = useContext(ServiceContext)

  const handleGetCarSelected = (carSelected: ICar) => {
    setSelectedCar(carSelected)
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        {listCar && <CarModal listCar={listCar} onGetCarSelected={handleGetCarSelected} />}
      </div>
    </>
  )
}
export default CarSelection