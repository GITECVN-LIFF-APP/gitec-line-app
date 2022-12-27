// Lib
import { useState } from 'react'

// Components
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'

// Assets
import { carimg, userimg } from '@assets'
import { fetcher } from '@constants/fetch'
import useSWR from 'swr'
import { IMember } from 'types/member'
import { ICar } from 'types/car'

const MyPage = () => {
  const userLocal: IMember = JSON.parse(localStorage.getItem('userSession') || 'null')

  const { data: user } = useSWR<IMember>(
    'https://sandy-halved-pleasure.glitch.me/users/' + userLocal.id,
    fetcher,
  )
  const { data: car } = useSWR<ICar[]>(
    'https://sandy-halved-pleasure.glitch.me/car?userId=' + userLocal.id,
    fetcher,
  )
  console.log('mypage',user,car);
  

  const [isMyCar, setIsMycar] = useState<boolean>(false)

  const handleClick = () => {
    setIsMycar(!isMyCar)
  }

  if (!user) return  <h1>...loading</h1>;
  if (!car) return <h1>...loading</h1>;
  const renderButton = () => {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='会員情報'
                onClick={handleClick}
              />
            </div>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='車種情報'
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderCar = () => {
    return (
      <>
        <h2 className='fw-bold mb-5'>マイページ</h2>
        <div className='row mb-2'>{renderButton()}</div>
        <div className='row mb-5'>
          <div className='p-2 col-3 ms-3'>
            <img src={carimg} className='img-fluid rounded-start' alt='...' />
          </div>
          <div className='col-8 d-flex align-items-center'>
            <h5 className='card-title mx-3 fw-semibold'>{car[0]?.carCompany}</h5>
            <h5 className='card-title fw-semibold'>{car[0]?.vehicles}</h5>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col'>
            <h6 className='fw-semibold mb-3'>車のナンバー</h6>
            <p>{car[0]?.licensePlate}</p>
          </div>
          <div className='col'>
            <h6 className='fw-semibold mb-3'>車検満了日</h6>
            <p>{car[0]?.registrationDate}</p>
          </div>
        </div>
        <div className='container'>
          <div className='row mb-2'>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='車種情報を編集する'
              />
            </div>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='車種を追加する'
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderMember = () => {
    return (
      <>
        <h2 className='fw-bold mb-5'>マイページ</h2>
        <div className='row mb-2'>{renderButton()}</div>
        <div className='row mb-5'>
          <div className='firstinfo'>
            <img src={userimg} />
            <div className='profileinfo'>
              <div className='d-flex align-items-center'>
                <h5 className='card-title fw-semibold'></h5>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col'>
            <h6 className='fw-semibold mb-3'>お名前</h6>
            <p>{user.name}</p>
          </div>
          <div className='col'>
            <h6 className='fw-semibold mb-3'>フリガナ</h6>
            <p>{user.furigana}</p>
          </div>
        </div>
        <div className='mb-5'>
          <h6 className='fw-semibold mb-3'>住所</h6>
          <p>{user.address}</p>
        </div>
        <div className='mb-5'>
          <h6 className='fw-semibold mb-3'>電話番号</h6>
          <p>{user.phone}</p>
        </div>
        <div className='container'>
          <div className='row mb-4'>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='会員情報を編集する'
              />
            </div>
            <div className='col'>
              <Button
                className='button-mypage'
                size={SIZES.SMALL}
                variant={VARIANTS.MAIN}
                children='退会する'
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row mb-5'>
            <Button
              className='button-mypage-confirm'
              size={SIZES.SMALL}
              variant={VARIANTS.MAIN}
              children='過去の予約履歴を見る'
            />
          </div>
        </div>
      </>
    )
  }

  return <>{isMyCar ? renderCar() : renderMember()}</>
}
export default MyPage
