// Components
import Button from '@components/Button'

// Enums
import { VARIANTS } from '@enums'

const ConfirmRegister = () => {
  return (
    <>
      <h2 className='fw-bold mb-5'>登録内容確認</h2>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>お名前</h6>
        <p>ジーアイテック太郎</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>フリガナ</h6>
        <p>ジーアイテックタロウ</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>住所</h6>
        <p>青森県八戸市根城二丁目30-1</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>電話番号</h6>
        <p>000-0000-0000</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>住所</h6>
        <p>青森県八戸市根城二丁目30-1</p>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>お持ちの車種メーカー</h6>
          <p>トヨタ</p>
        </div>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>お持ちの車種名</h6>
          <p>ルーミー</p>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>車のナンバー</h6>
          <p>八戸 あ 0000</p>
        </div>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>車検満了日</h6>
          <p>ルーミー</p>
        </div>
      </div>
      <Button variant={VARIANTS.MAIN} children='車種情報の入力' />
    </>
  )
}

export default ConfirmRegister
