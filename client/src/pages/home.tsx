// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'
import Menu from '@components/Menu'

const Home = () => {
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <Menu />
      </div>
      <Navbar />
    </>
  )
}
export default Home
