// Lib
import { Link } from 'react-router-dom'

// Components
import CardHorizontal from '@components/CardHorizontal'
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'

// Assets
import { userimg, carimg } from '@assets'

// Helpers
import { clearLocalStorage } from '@helpers/clearLocalStorage'

// Types
import { IService } from 'types/service'
import { IMember } from 'types/member'

export type ReservationInformationProps = {
  onAddService: () => void
  services: IService
  user: IMember
}

const ReservationInformation = ({ onAddService, services, user }: ReservationInformationProps) => {
  const handleClearLocalStorage = () => {
    clearLocalStorage('service')
  }

  const { carCompany, vehicles } = services.selectedCar

  const { name, phone, address } = services.gasStation

  const calendar = services.pickDateTime.start

  const { name: nameUser, furigana } = user

  return (
    <div className='container'>
      <div>
        <h2 className='fw-bold mb-5'>オイル交換予約</h2>
        <p className='fw-bold mb-4'>予約内容確認</p>
      </div>
      <div className='container'>
        <CardHorizontal
          image={userimg}
          title={nameUser ? nameUser : ''}
          description={furigana ? furigana : ''}
        />
      </div>
      <div className='mt-5'>
        <p className='fw-bold mb-4'>点検車種</p>
      </div>
      <div className='container'>
        <CardHorizontal image={carimg} title={`${carCompany} ${vehicles}`} description={''} />
      </div>
      <div className='mt-5'>
        <p className='fw-bold mb-5'>予約内容詳細</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>店舗名</h6>
        <p>{name}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>住所</h6>
        <p>{address}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>お電話番号</h6>
        <p>{phone}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>ご希望の日時</h6>
        <p>{calendar}</p>
      </div>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col h6'>
            <Link to={'/service/reservation-success'}>
              <Button
                onClick={onAddService}
                className='button-reservation'
                size={SIZES.MEDIUM}
                variant={VARIANTS.MAIN}
                children='予約する'
              />
            </Link>
          </div>
          <div className='col h6'>
            <Link to={'/service'}>
              <Button
                onClick={handleClearLocalStorage}
                className='button-reservation'
                size={SIZES.MEDIUM}
                variant={VARIANTS.MAIN}
                children='編集に戻る'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ReservationInformation
