// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'

// Lib
import './index.css'

// Image
import user from '../../../public/image/user.png'

const Map = () => {
  return (
    <>
      <Header />
      <>
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
      </>
      <Navbar />
    </>
  )
}
export default Map
