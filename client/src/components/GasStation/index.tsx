//Lib
import axios from 'axios'
import { SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import Button from '@components/Button'

// Enums
import { VARIANTS } from '@enums'

const GasStation = () => {
  axios.get('http://localhost:3000/reactcrud').then(
    (response) => {
      return response.data
    },
    (error) => {
      console.log(error)
    },
  )
  const Data = GasStation
  console.log(Data)
  // const options = [
  //   {value: 'ナナヨウ類家SS', text: 'ナナヨウ類家SS'},
  //   {value: '白銀サービスステーション', text: '白銀サービスステーション'},
  //   {value: 'セルフ旭ヶ丘サービスステーション', text: 'セルフ旭ヶ丘サービスステーション'},
  //   {value: '白銀サービスステーション', text: 'K白銀サービスステーション'},
  // ];

  // const [selected, setSelected] = useState(options[0].value);

  // const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
  //   console.log(event.target.value);
  //   setSelected(event.target.value);
  // };
  return (
    <>
      <div className='container-member'>
        <h2 className='fw-bold mb-5'>オイル交換予約</h2>
        <h3 className='fw-bold'>STEP1 </h3>
        <p className='fw-bold mb-4'>店舗を選ぶ</p>
      </div>
      <select className='form-select' form-select-lg>
        <option selected></option>
        <option value='1'>白銀サービスステーション</option>
        <option value='2'>セルフ旭ヶ丘サービスステーション</option>
        <option value='3'>白銀サービスステーション</option>
      </select>
      <div className='img-map'>
        <iframe
          src='https://www.google.com/maps/d/u/3/embed?mid=1tramBw8INl9P28RTJoBTywejp9MYyiM&ehbc=2E312F'
          width='100%'
          height='604'
        ></iframe>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>店舗名</h6>
        <p>{}</p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>住所</h6>
        <p></p>
      </div>
      <div className='mb-5'>
        <h6 className='fw-semibold mb-3'>お電話番号</h6>
        <p></p>
      </div>
      <Link to={'/pick-date-time'}>
        <Button variant={VARIANTS.MAIN} children='日にち選択へ' />
      </Link>
    </>
  )
}
export default GasStation
