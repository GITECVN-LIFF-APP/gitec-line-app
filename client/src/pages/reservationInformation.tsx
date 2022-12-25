// Lib
import axios from 'axios'

//Component
import Header from '@components/Header'
import ReservationInfor from '@components/ReservationInformation'

// Helpers
import { validationService } from '@helpers/validationService'

const ReservationInformation = () => {
  const handleAddService = () => {
    const service = JSON.parse(localStorage.getItem('service')|| '{}')

    // Validation service
    const { isValid, errors } = validationService(service)
    if (isValid) {
      // Add data to db
      axios.post('http://3.144.177.25:3000/service', service).then((res) => console.log(res.data))
    }
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <ReservationInfor onAddService={handleAddService} />
      </div>
    </>
  )
}

export default ReservationInformation
