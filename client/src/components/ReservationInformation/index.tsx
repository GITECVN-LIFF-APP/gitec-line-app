// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'
import CardHorizontalMember from '@components/CardHorizontalMember'
import CardHorizontalCar from '@components/CardHorizontalCar'

const ReservationInformation = () => {
  return (
    <>
      <Header />
      <>
        <div className='container-member'>
          <h2 className='fw-bold mb-5'>オイル交換予約</h2>
          <p className='fw-bold mb-4'>予約内容確認</p>
          <CardHorizontalMember />
        </div>
        <div className='container-car'>
          <p className='fw-bold mb-4'>点検車種</p>
          <CardHorizontalCar />
        </div>
      </>
      <Navbar />
    </>
  )
}
export default ReservationInformation
