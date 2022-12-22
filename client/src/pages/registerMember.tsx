// Lib
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import axios from 'axios'
import * as crypto from 'crypto-js'

// Component
import Input from '@components/Input'

// Types
import { IRegisterMember } from 'types/registerMember'

const initialValues: IRegisterMember = {
  username: '',
  password: '',
  confirmPassword: '',
  role: '',
}

const RegisterMember = () => {
  // Navigate router
  const navigate = useNavigate()

  // Validation form login
  const validateForm = (values: IRegisterMember) => {
    const errors = {} as IRegisterMember
    if (!values.username) {
      errors.username = 'Username is required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }

    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length > 15) {
      errors.password = 'Password be 15 characters or less'
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required'
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password not matched'
    }

    return errors
  }

  const handleCancleRegister = () => {
    navigate('/')
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={(values, { setSubmitting }) => {
        const accountRegister = {
          username: values.username,
          password: crypto.SHA256(values.password).toString(),
          role: 'member',
        }

        axios
          .post('http://localhost:5000/api/user', accountRegister)
          .then((res) => console.log(res.data))

        // Loading indacator
        setSubmitting(false)

        // Navigate login
        navigate('/')
      }}
    >
      {({ errors, handleChange, isSubmitting }) => (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
              <div className='card border-0 shadow rounded-3 my-5'>
                <div className='card-body p-4 p-sm-5'>
                  <h2 className='text-center mb-5'>サインアップ</h2>
                  <Form>
                    <div className='mb-4'>
                      <Input
                        onChange={handleChange}
                        id='username'
                        name='username'
                        label='ユ ー ザ ー '
                        type='text'
                        errorMessage={errors.username}
                      />
                    </div>
                    <div className='mb-4'>
                      <Input
                        onChange={handleChange}
                        id='password'
                        name='password'
                        label='パスワード'
                        type='password'
                        errorMessage={errors.password}
                      />
                    </div>
                    <div className='mb-4'>
                      <Input
                        onChange={handleChange}
                        id='confirmPassword'
                        name='confirmPassword'
                        label='パスワードを認証する'
                        type='password'
                        errorMessage={errors.confirmPassword}
                      />
                    </div>
                    <div className='d-flex justify-content-between'>
                      <button
                        className='btn btn-light btn-login text-uppercase fw-bold'
                        type='button'
                        onClick={handleCancleRegister}
                      >
                        キャンセル
                      </button>
                      {isSubmitting ? (
                        <button className='btn btn-primary btn-login' type='button' disabled>
                          <span
                            className='spinner-border spinner-border-sm'
                            role='status'
                            aria-hidden='true'
                          ></span>
                          Loading...
                        </button>
                      ) : (
                        <button
                          className='btn btn-primary btn-login text-uppercase fw-bold'
                          type='submit'
                        >
                          登録
                        </button>
                      )}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default RegisterMember
