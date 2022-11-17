// Lib
import { user } from '@assets'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'


// Image

const Home = () => {
  return (
    <>
      <Header />
      <>
      <Box className='homepagecard'>
        <div className='content'>
          <div className='card'>
            <div className='firstinfo'>
              <img src={user} />
              <div className='profileinfo'>
                <h3>オーナー</h3>
                <p className='bio'>ジーアイテック太郎</p>
              </div>
            </div>
          </div>
        </div>
        </Box>
      </>
      <Navbar children={undefined} />
    </>
  )
}
export default Home
