// Lib
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

// Components
import Navbar from '@components/Navbar'

// Assets
import { oilChange, washCar, kerosene, pika, checkCar, loop } from '@assets'

const SelectionService = () => {
  return (
    <>
      <div>
        <h2>各種予約</h2>
        <Link to={'/oil-change'}>
          <div className='img-service'>
            <div className='text'>
              <a className='label text-decoration-none'>オイル交換予約</a>
            </div>
            <img className='icon' src={oilChange} />
          </div>
        </Link>
        <div className='img-service'>
          <div className='text'>
            <a className='label text-decoration-none'>洗車予約</a>
          </div>
          <img className='icon' src={washCar} />
        </div>
        <div className='img-service'>
          <div className='text'>
            <a className='label text-decoration-none'>タイヤ交換予約</a>
          </div>
          <img className='icon' src={loop} />
        </div>
        <div className='img-service'>
          <div className='text'>
            <a className='label text-decoration-none'>Keeperコーディング予約</a>
          </div>
          <img className='icon' src={pika} />
        </div>
        <div className='img-service'>
          <div className='text'>
            <a className='label text-decoration-none'>車検予約</a>
          </div>
          <img className='icon' src={checkCar} />
        </div>
        <div className='img-service'>
          <div className='text'>
            <a className='label text-decoration-none'>灯油予約</a>
          </div>
          <img className='icon' src={kerosene} />
        </div>
      </div>
    </>
  )
}
export default SelectionService
