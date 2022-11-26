// Components
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'

// Assets
import { user } from '@assets'

const MyPageMember = () => {
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
        <div className='firstinfo'>
          <img src={user} />
          <div className='profileinfo'>
            <div className='d-flex align-items-center'>
              <h5 className='card-title fw-semibold'>ジーアイテック太郎</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>お名前</h6>
          <p>ジーアイテック太郎</p>
        </div>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>フリガナ</h6>
          <p>ジーアイテックタロウ</p>
        </div>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>住所</h6>
        <p>青森県八戸市根城二丁目30-1</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>電話番号</h6>
        <p>000-0000-0000</p>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <Button
            className='button-mypage'
            size={SIZES.SMALL}
            variant={VARIANTS.MAIN}
            children='会員情報を編集する'
          />
        </div>
        <div className='col'>
          <Button
            className='button-mypage'
            size={SIZES.SMALL}
            variant={VARIANTS.MAIN}
            children='退会する'
          />
        </div>
      </div>
      <div className='row mb-5'>
        <Button
          className='button-mypage-confirm'
          size={SIZES.SMALL}
          variant={VARIANTS.MAIN}
          children='過去の予約履歴を見る'
        />
      </div>
    </>
  )
}
export default MyPageMember
