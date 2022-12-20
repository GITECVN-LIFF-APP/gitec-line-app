// Lib
import { Formik } from 'formik'
import { Link } from 'react-router-dom'

// Components
import Button from '@components/Button'
import Input from '@components/Input'

// Enums
import { VARIANTS } from '@enums'

// Types
import { IMember } from 'types/member'


const initialValues: IMember = {
  name: '',
  furigana: '',
  address: '',
  phone: '',
}

export type IContactFormProps = {
  onSubmit: (values: IMember) => void
}

const MemberRegister = ({ onSubmit }: IContactFormProps) => {
  const validateForm = (values: IMember) => {
    const errors = {} as IMember
    if (!values.name) {
      errors.name = 'Name is required'
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less'
    }

    if (!values.furigana) {
      errors.furigana = 'Furigana is required'
    } else if (values.furigana.length > 15) {
      errors.furigana = 'Furigana be 15 characters or less'
    }

    if (!values.address) {
      errors.address = 'Address is required'
    } else if (values.address.length > 15) {
      errors.address = 'Address be 15 characters or less'
    }

    if (!values.phone) {
      errors.phone = 'Phone is required'
    } else if (!/^(\d{2,4})\-(\d{2,4})\-(\d{4})/i.test(values.phone)) {
      errors.phone = 'Phone must be format 0XXX-XX-XXXX'
    }

    return errors
  }

  return (
    <Formik initialValues={initialValues} validate={validateForm} onSubmit={onSubmit}>
      {({ errors, handleSubmit, handleChange }) => (
        <>
          <h2 className='fw-bold mb-5'>会員情報登録</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <Input
                onChange={handleChange}
                id='name'
                name='name'
                label='お名前 '
                type='text'
                errorMessage={errors.name}
              />
            </div>
            <div className='mb-4'>
              <Input
                onChange={handleChange}
                id='furigana'
                name='furigana'
                label='フリガナ'
                type='text'
                errorMessage={errors.furigana}
              />
            </div>
            <div className='mb-4'>
              <Input
                onChange={handleChange}
                id='address'
                name='address'
                label='住所'
                type='text'
                errorMessage={errors.address}
              />
            </div>
            <div className='mb-5'>
              <Input
                onChange={handleChange}
                id='phone'
                name='phone'
                label='電話番号 '
                type='text'
                errorMessage={errors.phone}
              />
            </div>
            <Link to={'/register-car'}>
            <Button variant={VARIANTS.MAIN} children='車種情報の入力' typeButton='submit' />
            </Link>
          </form>
        </>
      )}
    </Formik>
  )
}

export default MemberRegister
