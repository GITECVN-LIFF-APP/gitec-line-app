//Lib
import { Link } from 'react-router-dom'

// Components
import Button from '@components/Button'
import Input from '@components/Input'

// Enums
import { VARIANTS } from '@enums'
import { Formik } from 'formik'
import { ICar } from 'types/car'

const initialValues: ICar = {
  carCompany: '',
  vehicles: '',
  licensePlate: '',
  registrationDate: '',
  userId: '',
  id: '',
}

export type IContactFormProps = {
  onSubmit: (values: ICar) => void
}

const CarRegister = ({ onSubmit }: IContactFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ errors, handleSubmit, handleChange }) => (
        <>
          <h1 className='fw-bold mb-5'>車種情報登録</h1>
          <form onSubmit={handleSubmit}>
            <div className='row mb-4'>
              <div className='col'>
                <Input
                  onChange={handleChange}
                  id='carCompany'
                  name='carCompany'
                  label='お持ちの車種メーカー'
                  type='text'
                  placeholder='トヨタ'
                />
              </div>
              <div className='col'>
                <Input
                  onChange={handleChange}
                  id='vehicles'
                  name='vehicles'
                  label='お持ちの車種名'
                  type='text'
                  placeholder='ルーミー'
                />
              </div>
            </div>
            <div className='row mb-5'>
              <div className='col'>
                <Input
                  required={true}
                  onChange={handleChange}
                  id='licensePlate'
                  name='licensePlate'
                  label='車のナンバー'
                  type='text'
                  placeholder='あ 00-00'
                />
              </div>
              <div className='col'>
                <Input
                  onChange={handleChange}
                  id='registrationDate'
                  name='registrationDate'
                  label='車検満了日'
                  type='text'
                />
              </div>
            </div>
            <p className='text-danger mb-5'>※登録内容は全て必須項目です。</p>
            {/* <Link to={'/confirm-information'}> */}
            <Button variant={VARIANTS.MAIN} children='車種情報の入力' typeButton='submit' />
            {/* </Link> */}
          </form>
        </>
      )}
    </Formik>
  )
}

export default CarRegister
