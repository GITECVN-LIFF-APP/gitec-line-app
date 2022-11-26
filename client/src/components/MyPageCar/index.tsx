// Components
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'

// Assets
import { car } from '@assets'

const MyPageCar = () => {
  return (
    <>
      <h2 className='fw-bold mb-5'>マイページ</h2>
      <div className='row mb-5'>
        <div className='col'>
          <Button
            className='button-mypage'
            size={SIZES.SMALL}
            variant={VARIANTS.MAIN}
            children='予約する'
          />
        </div>
        <div className='col'>
          <Button
            className='button-mypage'
            size={SIZES.SMALL}
            variant={VARIANTS.MAIN}
            children='編集に戻る'
          />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='p-2 col-3 ms-3'>
          <img src={car} className='img-fluid rounded-start' alt='...' />
        </div>
        <div className='col-8 d-flex align-items-center'>
          <h5 className='card-title mx-3 fw-semibold'>トヨタ</h5>
          <h5 className='card-title fw-semibold'>ルーミー</h5>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>車のナンバー</h6>
          <p>八戸 あ 0000</p>
        </div>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>車検満了日</h6>
          <p>2023年4月</p>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <Button
            className='button-mypage'
            size={SIZES.SMALL}
            variant={VARIANTS.MAIN}
            children='車種情報を編集する'
          />
        </div>
        <div className='col'>
          <Button
            className='button-mypage'
            size={SIZES.SMALL}
            variant={VARIANTS.MAIN}
            children='車種を追加する'
          />
        </div>
      </div>
    </>
  )
}
export default MyPageCar
