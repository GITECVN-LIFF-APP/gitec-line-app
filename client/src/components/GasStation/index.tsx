// Lib
import { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

// Components
import Button from '@components/Button'

// Enums
import { VARIANTS } from '@enums'

export type GasStationProps = {
  onGetGasStation: (gasStation: string) => void
}

const GasStation = ({ onGetGasStation }: GasStationProps) => {
  const handleGetGasStation = (e: ChangeEvent<HTMLSelectElement>) => {
    const gasStation = e.target.value
    onGetGasStation(gasStation)
  }

  return (
    <>
      <div className='container-member'>
        <h2 className='fw-bold mb-5'>オイル交換予約</h2>
        <h3 className='fw-bold'>STEP1 </h3>
        <p className='fw-bold mb-4'>店舗を選ぶ</p>
      </div>
      <select onChange={handleGetGasStation} className='form-select' form-select-lg>
        <option selected>ナナヨウ類家SS</option>
        <option value='セルフ類家サービスステーション'>セルフ類家サービスステーション</option>
        <option value='セルフ旭ヶ丘サービスステーション'>セルフ旭ヶ丘サービスステーション</option>
        <option value='白銀サービスステーション'>白銀サービスステーション</option>
        <option value='江陽サービスステーション'>江陽サービスステーション</option>
        <option value='青葉サービスステーション'>青葉サービスステーション</option>
        <option value='浜市川サービスステーション'>浜市川サービスステーション</option>
      </select>
      <div className='img-map'>
        <iframe
          src='https://www.google.com/maps/d/u/3/embed?mid=1tramBw8INl9P28RTJoBTywejp9MYyiM&ehbc=2E312F'
          width='100%'
          height='604'
        ></iframe>
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
      <Link to={'/service/pick-date-time'}>
        <Button variant={VARIANTS.MAIN} children='日にち選択へ' />
      </Link>
    </>
  )
}

export default GasStation
