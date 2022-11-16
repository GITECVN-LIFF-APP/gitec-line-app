// Lib
import { Box } from '@mui/material'

// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'

// Image
import { oilChange, washCar, kerosene, pika, checkCar, loop } from '@assets'

const Selection = () => {
  return (
    <>
      <Header />
      <>
        <Box sx={{ width: '100%' }}>
          <h2>各種予約</h2>
          <div className='img'>
            <div className='text'>
              <a className='label'>オイル交換予約</a>
            </div>
            <img className='icon' src={oilChange} />
          </div>
          <div className='img'>
            <div className='text'>
              <a className='label'>洗車予約</a>
            </div>
            <img className='icon' src={washCar} />
          </div>
          <div className='img'>
            <div className='text'>
              <a className='label'>タイヤ交換予約</a>
            </div>
            <img className='icon' src={loop} />
          </div>
          <div className='img'>
            <div className='text'>
              <a className='label'>Keeperコーディング予約</a>
            </div>
            <img className='icon' src={pika} />
          </div>
          <div className='img'>
            <div className='text'>
              <a className='label'>車検予約</a>
            </div>
            <img className='icon' src={checkCar} />
          </div>
          <div className='img'>
            <div className='text'>
              <a className='label'>灯油予約</a>
            </div>
            <img className='icon' src={kerosene} />
          </div>
        </Box>
      </>
      <Navbar />
    </>
  )
}
export default Selection
