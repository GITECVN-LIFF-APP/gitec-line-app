// Lib
import axios from 'axios'

//Component
import Header from '@components/Header'
import ReservationInfor from '@components/ReservationInformation'

// Helpers
import { validationService } from '@helpers/validationService'

// Types
import { IMember } from 'types/member'

const ReservationInformation = () => {
  // Service local storage
  const service = JSON.parse(localStorage.getItem('service') || '{}')

  // User session local storage
  const user: IMember = JSON.parse(localStorage.getItem('userSession') || 'null')

  const handleAddService = () => {
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
        <ReservationInfor user={user} services={service} onAddService={handleAddService} />
      </div>
    </>
  )
}

export default ReservationInformation
