// Lib
import { user } from '@assets'
import { Box } from '@mui/material'

// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'
import CardHorizontal from '@components/CardHorizontalMember'

const Home = () => {
  return (
    <>
      <Header />
      <>
        <CardHorizontal />
      </>
      <Navbar />
    </>
  )
}
export default Home
