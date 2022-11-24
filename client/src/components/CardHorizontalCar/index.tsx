// Assets
import { car } from '@assets'

const CardHorizontalCar = () => {
  return (
    <>
      <div className='row card-horizontal mb-4'>
        <div className='p-2 col-3 ms-3'>
          <img src={car} className='img-fluid rounded-start' alt='...' />
        </div>
        <div className='col-8 d-flex align-items-center'>
          <h5 className='card-title mx-3 fw-semibold'>トヨタ</h5>
          <h5 className='card-title fw-semibold'>ルーミー</h5>
        </div>
      </div>
    </>
  )
}
export default CardHorizontalCar
