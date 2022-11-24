// Lib
import { Box } from '@mui/material'

// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'

// Assets
import { oilChange, washCar, kerosene, pika, checkCar, loop } from '@assets'

const SelectionService = () => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <h2>各種予約</h2>
        <div className='img'>
          <div className='text'>
            <a className='label text-decoration-none'>オイル交換予約</a>
          </div>
          <img className='icon' src={oilChange} />
        </div>
        <div className='img'>
          <div className='text'>
            <a className='label text-decoration-none'>洗車予約</a>
          </div>
          <img className='icon' src={washCar} />
        </div>
        <div className='img'>
          <div className='text'>
            <a className='label text-decoration-none'>タイヤ交換予約</a>
          </div>
          <img className='icon' src={loop} />
        </div>
        <div className='img'>
          <div className='text'>
            <a className='label text-decoration-none'>Keeperコーディング予約</a>
          </div>
          <img className='icon' src={pika} />
        </div>
        <div className='img'>
          <div className='text'>
            <a className='label text-decoration-none'>車検予約</a>
          </div>
          <img className='icon' src={checkCar} />
        </div>
        <div className='img'>
          <div className='text'>
            <a className='label text-decoration-none'>灯油予約</a>
          </div>
          <img className='icon' src={kerosene} />
        </div>
      </Box>
      <Navbar />
    </>
  )
}
export default SelectionService
