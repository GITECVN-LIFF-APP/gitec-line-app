// Lib
import { Link } from 'react-router-dom'

// Enums
import { VARIANTS } from '@enums'

// Components
import Button from '@components/Button'

export type CalendarProps = {
  onGetDateTimePicker: (dateTimePicker: string) => void
}

const Calendar = ({ onGetDateTimePicker }: CalendarProps) => {
  const handleGetDateTimePicker = () => {
    onGetDateTimePicker('15-12-2022')
  }

  return (
    <>
      <div>
        <h2 className='fw-bold mb-5'>オイル交換予約</h2>
        <h3 className='fw-bold'>STEP2</h3>
        <p className='fw-bold mb-4'>日にちを選ぶ</p>
      </div>
      
      <div className='mb-5 mt-4'>
        <h6 className='fw-semibold mb-4'>ご希望の日時</h6>
        <p>10月9日（日）　16:00〜17:00</p>
      </div>
      <Link to={'/service/car-selection'}>
        <Button onClick={handleGetDateTimePicker} variant={VARIANTS.MAIN} children='日にち選択へ' />
      </Link>
    </>
  )
}

export default Calendar