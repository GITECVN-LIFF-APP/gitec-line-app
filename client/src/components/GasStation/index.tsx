// Components
import Button from '@components/Button'

// Assets
import { map } from '@assets'

// Enums
import { VARIANTS } from '@enums'

const GasStation = () => {
  return (
    <>
      <div className='container-member'>
        <h2 className='fw-bold mb-5'>オイル交換予約</h2>
        <h3 className='fw-bold'>STEP1 </h3>
        <p className='fw-bold mb-4'>店舗を選ぶ</p>
      </div>
      <select className='form-select' form-select-lg>
        <option selected>ナナヨウ類家SS</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
      <div className='img-map'>
        <img src={map} />
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
      <Button variant={VARIANTS.MAIN} children='日にち選択へ' />
    </>
  )
}
export default GasStation