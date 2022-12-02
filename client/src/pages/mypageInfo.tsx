// Components
import Header from '@components/Header'
import MyPage from '@components/MyPage'
import Navbar from '@components/Navbar'

const MyPageInfo = () => {
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <MyPage />
      </div>
      <Navbar />
    </>
  )
}
export default MyPageInfo
