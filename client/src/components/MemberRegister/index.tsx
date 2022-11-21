// Components
import Button from '@components/Button'
import Input from '@components/Input'

// Enums
import { VARIANTS } from '@enums'

const MemberRegister = () => {
  return (
    <>
      <h2 className='fw-bold mb-5'>会員情報登録</h2>
      <div className='mb-4'>
        <Input id={''} name={''} label={'お名前 '} type='text' defaultValue={''} />
      </div>
      <div className='mb-4'>
        <Input id={''} name={''} label={'フリガナ'} type='text' defaultValue={''} />
      </div>
      <div className='mb-4'>
        <Input id={''} name={''} label={'住所'} type='text' defaultValue={''} />
      </div>
      <div className='mb-5'>
        <Input id={''} name={''} label={'電話番号 '} type='text' defaultValue={''} />
      </div>
      <p className='text-danger mb-5'>※登録内容は全て必須項目です。</p>
      <Button variant={VARIANTS.MAIN} children='車種情報の入力' />
    </>
  )
}

export default MemberRegister
