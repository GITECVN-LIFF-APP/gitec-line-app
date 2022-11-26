// Components
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'
import { Link } from 'react-router-dom'

const Reservation = () => {
  return (
    <>
      <h2 className='fw-bold mb-5'>予約完了</h2>
      <h6 className='mb-5 fs-6 fw-bolder'>ご予約ありがとうございます！</h6>
      <p className='mb-5 me-5'>
        LINEメッセージにて、ご予約内容を返信いたしました。
        内容がお間違いない場合は、当日になりましたら、 メッセージに添付しておりますQRコードをご準備
        いただき、店舗へお越しください。
      </p>
      <Link to={'/'}>
        <Button size={SIZES.LARGE} variant={VARIANTS.MAIN} children='ホームへ戻る' />
      </Link>
    </>
  )
}

export default Reservation
