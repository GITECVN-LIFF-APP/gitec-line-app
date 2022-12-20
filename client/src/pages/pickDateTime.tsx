// Lib
import { useContext } from 'react'

// Components
import Header from '@components/Header'
import Calendar from '@components/Calendar'

// Contexts
import { ServiceContext } from '@contexts/serviceContext'


const PickDateTime = () => {
  const { setPickDateTime } = useContext(ServiceContext)

  const handleGetDateTimePicker = (dateTimePicker: string) => {
    setPickDateTime(dateTimePicker)
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <Calendar onGetDateTimePicker={function (dateTimePicker: string): void {
          throw new Error('Function not implemented.')
        } } />
      </div>
    </>
  )
}

export default PickDateTime
