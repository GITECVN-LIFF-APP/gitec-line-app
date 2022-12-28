// Lib

// Assets

// Components
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'

const History = () => {
  return (
    <>
      <div className='row mb-5'>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>過去の予約履歴</h6>
        </div>
        <div className='container'>
          <div className='row mb-4'>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='オイル交換'
              />
            </div>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='洗車'
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row mb-4'>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='タイヤ交換'
              />
            </div>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='Keeperコーティング'
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row mb-4'>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='車検'
              />
            </div>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='灯油'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default History
