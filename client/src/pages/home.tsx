// Lib
import { user } from '@assets'
import { Box } from '@mui/material'

// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
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
      </div>
      <Navbar />
    </>
  )
}
export default Home
