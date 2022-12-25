// Lib
import { Link } from 'react-router-dom'

// Assets
import { carimg } from '@assets'

// Components
import Button from '@components/Button'

// Enums
import { VARIANTS } from '@enums'

export type CarModalProps = {
  onGetCarSelectionId: (carSelectionId: string) => void
}

const CarModal = ({ onGetCarSelectionId }: CarModalProps) => {
  const handleGetCarSelection = () => {
    onGetCarSelectionId('car01')
  }

  return (
    <>
      <h2 className='fw-bold mb-5'>オイル交換予約</h2>
      <h3 className='fw-bold'>STEP3 </h3>
      <p className='fw-bold mb-4'>車種を選ぶ</p>
      <div className='row card-horizontal mb-4'>
        <div className='p-2 col-3 ms-3'>
          <img src={carimg} className='img-fluid rounded-start' alt='...' />
        </div>
        <div className='col-8 d-flex align-items-center'>
          <h5 className='card-title mx-3 fw-semibold'>トヨタ</h5>
          <h5 className='card-title fw-semibold'>ルーミー</h5>
        </div>
      </div>
      <Link to={'/service/reservation-confirm'}>
        <Button onClick={handleGetCarSelection} variant={VARIANTS.MAIN} children='車種情報の入力' />
      </Link>
    </>
  )
}

export default CarModal
