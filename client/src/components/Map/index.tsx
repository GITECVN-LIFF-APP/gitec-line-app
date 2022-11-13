// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'

// Lib
import './index.css'
import { Box } from '@mui/material'

// Image

const Map = () => {
  return (
    <>
      <Header />
      <>
        <iframe
          width='450'
          height='250'
          src='https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyAm-Y5YuYRhacF59tC76_40znYzJRN80Cc&PARAMETERS'
        ></iframe>
      </>
      <Navbar />
    </>
  )
}
export default Map
