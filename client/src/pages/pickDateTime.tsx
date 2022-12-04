// Components
import Calendar from '@components/Calendar'
import Header from '@components/Header'

const PickDateTime = () => {
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <Calendar />
      </div>
    </>
  )
}

export default PickDateTime
