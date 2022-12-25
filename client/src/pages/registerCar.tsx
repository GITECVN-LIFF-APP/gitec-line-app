// Components
import CarRegister from '@components/CarRegister'
import Header from '@components/Header'
import { ICar } from 'types/car'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const RegisTerCar = () => {
  const navigate = useNavigate()
  
  const handleOnSubmitForm =async (value:ICar) => {
    console.log('value', value)
    const existedUserSession = JSON.parse(
      localStorage.getItem('userSession') || 'null'
    )
    await axios
        .post('https://sandy-halved-pleasure.glitch.me/car', {...value,userId:existedUserSession.id})
        .then((res) => localStorage.setItem('car', JSON.stringify(res.data)))
        navigate('/confirm-information')
  }
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <CarRegister onSubmit={handleOnSubmitForm} />
      </div>
    </>
  )
}

export default RegisTerCar
