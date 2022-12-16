// Lib
import { useContext } from 'react'

// Components
import Calendar from '@components/Calendar'
import Header from '@components/Header'

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
        <Calendar onGetDateTimePicker={handleGetDateTimePicker} />
      </div>
    </>
  )
}

export default PickDateTime
