// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'

// Lib
import './index.css'


// Image

const Map = () => {
  return (
    <>
      <Header />
      <>
        <iframe
          width='450'
          height='250'
          src='https://maps.google.com/maps/api/js?key=AIzaSyBazijMOj67rUPPtVybwi2Nbo90tx7vwZ'
        ></iframe>
      </>
      <Navbar />
    </>
  )
}
export default Map
