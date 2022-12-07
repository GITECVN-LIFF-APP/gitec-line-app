// Components
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import SelectionService from '@components/SelectionService'

const Service = () => {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <SelectionService />
      </div>
      <Navbar />
    </>
  )
}

export default Service
