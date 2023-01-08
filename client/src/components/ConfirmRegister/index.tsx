//Lib
import useSWR, { SWRConfig } from 'swr'

// Components
import Button from '@components/Button'

// Enums
import { VARIANTS } from '@enums'
import { Link } from 'react-router-dom'
import { IMember } from 'types/member'
import { ICar } from 'types/car'
import { fetcher } from '@constants/fetch'


const ConfirmRegister = () => {
  const user:IMember=JSON.parse(
    localStorage.getItem('userSession') || 'null'
  );
  const { data: car } = useSWR<ICar[]>(
    'https://sandy-halved-pleasure.glitch.me/car?userId=' + user.id,
    fetcher,
  )
    console.log(car?.[0]);
    
  if (!car) return  <h1>処理中...</h1>;
  return (
    <>
      <h2 className='fw-bold mb-5'>登録内容確認</h2>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>お名前</h6>
        <p>{user.name}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>フリガナ</h6>
        <p>{user.furigana}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>住所</h6>
        <p>{user.address}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>電話番号</h6>
        <p>{user.phone}</p>
      </div>

      <div className='row mb-5'>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>お持ちの車種メーカー</h6>
          <p>{car[0]?.carCompany}</p>
        </div>
        <div className='col'>
          <h6 className='fw-semibold mb-3'>お持ちの車種名</h6>
          <p>{car[0]?.vehicles}</p>
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
      <Link to={'/register-success'}>
        <Button variant={VARIANTS.MAIN} children='車種情報の入力' />
      </Link>
    </>
  )
}

export default ConfirmRegister
