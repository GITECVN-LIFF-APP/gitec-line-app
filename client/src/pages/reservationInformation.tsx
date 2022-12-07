//Component
import Header from '@components/Header'
import ReservationInfor from '@components/ReservationInformation'

const ReservationInformation = () => {
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <ReservationInfor />
      </div>
    </>
  )
}

export default ReservationInformation
