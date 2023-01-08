// Lib
import { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'

// Components
import Header from '@components/Header'
// Contexts
import { fetcher } from '@constants/fetch'
import useSWR, { useSWRConfig } from 'swr'

// Enums
import { VARIANTS } from '@enums'
import { TextField } from '@mui/material'
import Button from '@components/Button'
import { IEvent } from 'types/events'
import { ServiceContext } from '@contexts/serviceContext'

const PickDateTime = () => {
  const { mutate } = useSWRConfig()
  const { data: events } = useSWR<IEvent[]>(
    'https://sandy-halved-pleasure.glitch.me/events',
    fetcher,
  )
  const navigate = useNavigate()
  const [isDisable, setIsDisable] = useState(true)
  const { setPickDateTime } = useContext(ServiceContext)

  const handleClick = () => {
    navigate('/service/car-selection')
  }
  const [selectDate, setselectDate] = useState<Date | null>(null)
  // console.log(selectDate )

  const handleChange = (e: { target: { value: any } }) => {
    const value: Date = e.target.value
    setselectDate(value)
    if (!value) {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
    const newObject: IEvent = {
      title: 'Priority clean',
      start: value,
      end: value,
      color: 'red',
    }
    setPickDateTime(newObject)
  }

  if (!events) return <h1>処理中...</h1>
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <>
          <div>
            <h1 className='fw-bold mb-5'>オイル交換予約</h1>
            <h3 className='fw-bold'>STEP2</h3>
            <h3 className='fw-bold mb-4'>日にちを選ぶ</h3>
          </div>
          <FullCalendar
            // defaultView="timeGridWeek"
            plugins={[timeGridPlugin, dayGridPlugin]}
            // header={{
            //   left: 'prev,next today',
            //   center: 'title',
            //   right: 'timeGridWeek,timeGridDay'
            // }}
            eventMinHeight={18}
            slotMinTime='09:00:00'
            slotMaxTime='18:00:00'
            nowIndicator={false}
            allDayText='All Day'
            locale='ja'
            timeZone='local'
            events={events}
            // eventClick={handleClick}
            // scrollTime={'08:00:00'}
            expandRows={true}
            // dateClick={handleDateClick}
          />
          <div className='mb-5 mt-4'>
            <TextField
              id='datetime-local'
              label={'End Date'}
              name='end'
              type='datetime-local'
              sx={{ width: 250 }}
              onChange={handleChange}
              value={selectDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className='mb-5 mt-4'>
            <h6 className='fw-semibold mb-4'>ご希望の日時</h6>
            <p>{selectDate}</p>
          </div>

          <Button
            variant={VARIANTS.MAIN}
            disabled={isDisable}
            onClick={handleClick}
            children='日にち選択へ'
          />
        </>
      </div>
    </>
  )
}

export default PickDateTime
