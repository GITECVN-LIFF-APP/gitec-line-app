// Lib
import { useContext } from 'react'

// Components
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import SelectionService from '@components/SelectionService'

// Contexts
import { ServiceContext } from '@contexts/serviceContext'

const Service = () => {
  const { setNameService, setIdCustomer } = useContext(ServiceContext)

  const handleGetNameService = (nameService: string) => {
    setIdCustomer('01')
    setNameService(nameService)
  }

  return (
    <>
      <Header />
      <div className='container mt-3'>
        <SelectionService onGetNameService={handleGetNameService} />
      </div>
      <Navbar />
    </>
  )
}

export default Service
