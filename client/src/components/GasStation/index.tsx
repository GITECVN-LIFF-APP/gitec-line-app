// Lib
import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Components
import Button from '@components/Button'

// Enums
import { VARIANTS } from '@enums'
import { IGasStation } from 'types/gasStation'
import { fetcher } from '@constants/fetch'
import useSWR from 'swr'

export type GasStationProps = {
  onGetGasStation: (gasStation: IGasStation) => void
  gasStations: IGasStation[] | undefined
  gasStation: IGasStation | undefined
}

const GasStation = ({ onGetGasStation, gasStations, gasStation }: GasStationProps) => {
  const [isDisable, setIsDisable] = useState(true)
  console.log('gasStation', gasStation)

  const handleGetGasStation = (e: ChangeEvent<HTMLSelectElement>) => {
    const getGas: IGasStation[] | undefined = gasStations?.filter(
      (gasStation) => gasStation.id == e.target.value,
    )
    console.log('e.target', getGas)
    if (e.target.value === '') {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
    getGas && onGetGasStation(getGas[0])
  }
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/service/pick-date-time')
  }

  const [listGasSation, setLisGasStation] = useState([])

  return (
    <>
      <div className='container-member'>
        <h1 className='fw-bold mb-5'>オイル交換予約</h1>
        <h3 className='fw-bold'>STEP1 </h3>
        <h3 className='fw-bold mb-4'>店舗を選ぶ</h3>
      </div>
      {/* <select onChange={handleGetGasStation} className='form-select' form-select-lg>
        <option selected>ナナヨウ類家SS</option>
        <option value='セルフ類家サービスステーション'>セルフ類家サービスステーション</option>
        <option value='セルフ旭ヶ丘サービスステーション'>セルフ旭ヶ丘サービスステーション</option>
        <option value='白銀サービスステーション'>白銀サービスステーション</option>
        <option value='江陽サービスステーション'>江陽サービスステーション</option>
        <option value='青葉サービスステーション'>青葉サービスステーション</option>
        <option value='浜市川サービスステーション'>浜市川サービスステーション</option>
      </select> */}

      <select onChange={handleGetGasStation} className='form-select' form-select-lg>
        <option value=''>ガソリンスタンド を選んでください。</option>
        {gasStations &&
          gasStations.map((gasStation: IGasStation) => (
            <option value={gasStation.id}>{gasStation.name}</option>
          ))}
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
        <p>{gasStation && gasStation.name}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>住所</h6>
        <p>{gasStation && gasStation.address}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>お電話番号</h6>
        <p>{gasStation && gasStation.phone}</p>
      </div>

      <Button
        variant={VARIANTS.MAIN}
        disabled={isDisable}
        onClick={handleClick}
        children='日にち選択へ'
      />
    </>
  )
}

export default GasStation
