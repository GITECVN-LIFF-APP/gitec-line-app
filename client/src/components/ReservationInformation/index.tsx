// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'
import CardHorizontalMember from '@components/CardHorizontalMember'
import CardHorizontalCar from '@components/CardHorizontalCar'
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'

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
        <div className='container-infor'>
          <p className='fw-bold mb-4'>予約内容詳細</p>
        </div>
        <div className='mb-5'>
          <h6 className='fw-semibold mb-3'>店舗名</h6>
          <p>ナナヨウ類家SS</p>
        </div>
        <div className='mb-5'>
          <h6 className='fw-semibold mb-3'>住所</h6>
          <p>八戸市類家5丁目10-2</p>
        </div>
        <div className='mb-5'>
          <h6 className='fw-semibold mb-3'>お電話番号</h6>
          <p>0000-00-0000</p>
        </div>
        <div className='mb-5'>
          <h6 className='fw-semibold mb-3'>ご希望の日時</h6>
          <p>10月9日（日）　16:00〜17:00</p>
        </div>
        <div className='row mb-5'>
          <div className='col'>
            <Button className='button-confirm' size={SIZES.LARGE} variant={VARIANTS.MAIN} children='予約する' />
          </div>
          <div className='col'>
            <Button className='button-return-edit' size={SIZES.LARGE} variant={VARIANTS.MAIN} children='編集に戻る' />
          </div>
        </div>
      </>
      <Navbar />
    </>
  )
}
export default ReservationInformation
