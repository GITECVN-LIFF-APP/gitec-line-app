// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'
import Menu from '@components/Menu'
import MyPageMember from '@components/MyPageMember'

const Home = () => {
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <MyPageMember />        
      </div>
      <Navbar />
    </>
  )
}
export default Home
