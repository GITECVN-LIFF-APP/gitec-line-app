// Components
import CardHorizontal from '@components/CardHorizontal'
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'
import { Link } from 'react-router-dom'

// Assets
import { user, car } from '@assets'

const ReservationInformation = () => {
  return (
    <div className='container'>
      <div>
        <h2 className='fw-bold mb-5'>オイル交換予約</h2>
        <p className='fw-bold mb-4'>予約内容確認</p>
      </div>
      <div className='container'>
        <CardHorizontal image={user} title='オーナー' description='ジーアイテック太郎' />
      </div>
      <div className='mt-5'>
        <p className='fw-bold mb-4'>点検車種</p>
      </div>
      <div className='container'>
        <CardHorizontal image={car} title='トヨタ  ルーミー' description={''} />
      </div>
      <div className='mt-5'>
        <p className='fw-bold mb-5'>予約内容詳細</p>
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
      <div className='container'>
        <div className='row mb-5'>
          <div className='col h6'>
            <Link to={'/reservation-success'}>
              <Button
                className='button-reservation'
                size={SIZES.MEDIUM}
                variant={VARIANTS.MAIN}
                children='予約する'
              />
            </Link>
          </div>
          <div className='col h6'>
            <Link to={'/service'}>
              <Button
                className='button-reservation'
                size={SIZES.MEDIUM}
                variant={VARIANTS.MAIN}
                children='編集に戻る'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ReservationInformation
