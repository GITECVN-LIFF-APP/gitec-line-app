// Components
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'

// Assets
import { user } from '@assets'

const MyPage = () => {
  return (
    <>
      <h2 className='fw-bold mb-5'>マイページ</h2>
      <div className='row mb-5'>
        <div className='col'>
          <Button
            className='button-reservation'
            size={SIZES.MEDIUM}
            variant={VARIANTS.MAIN}
            children='予約する'
          />
        </div>
        <div className='col'>
          <Button
            className='button-reservation'
            size={SIZES.MEDIUM}
            variant={VARIANTS.MAIN}
            children='編集に戻る'
          />
        </div>
      </div>
      <div className='row mb-5'>
        <img src={user} />
      </div>
    </>
  )
}
export default MyPage
