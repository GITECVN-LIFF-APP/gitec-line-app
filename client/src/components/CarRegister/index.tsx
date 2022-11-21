// Components
import Button from '@components/Button'
import Input from '@components/Input'

// Enums
import { VARIANTS } from '@enums'

const CarRegister = () => {
  return (
    <>
      <h2 className='fw-bold mb-5'>車種情報登録</h2>
      <div className='row mb-4'>
        <div className='col'>
          <Input
            id={''}
            name={''}
            label='お持ちの車種メーカー'
            type={undefined}
            defaultValue={''}
          />
        </div>
        <div className='col'>
          <Input id={''} name={''} label='お持ちの車種名' type={undefined} defaultValue={''} />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <Input
            id={''}
            name={''}
            label='車のナンバー'
            type={undefined}
            defaultValue={''}
            placeholder='あ 00-00'
          />
        </div>
        <div className='col'>
          <Input id={''} name={''} label='車検満了日' type={undefined} defaultValue={''} />
        </div>
      </div>
      <p className='text-danger mb-5'>※登録内容は全て必須項目です。</p>
      <Button variant={VARIANTS.MAIN} children='車種情報の入力' />
    </>
  )
}

export default CarRegister
