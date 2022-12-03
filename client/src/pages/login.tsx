// Lib
import { useEffect, useState } from 'react'
import liff from '@line/liff'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

// Component
import Input from '@components/Input'

// Types
import { IAccount } from 'types/account'
import Button from '@components/Button'
import { VARIANTS } from '@enums'

const initialValues: IAccount = {
  username: '',
  password: '',
}

interface Profile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}

function Login() {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [data, setData] = useState({
    isInClient: false,
    os: 'ios',
    isInAppBrowser: false,
    isLoggedIn: false,
  })
  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [error, setError] = useState('')

  const liffInit = async () => {
    try {
      await liff.init({ liffId: import.meta.env.VITE_LIFF_ID })
      setMessage('LIFF init succeeded.')
      const { userAgent } = navigator
      setData({
        isInClient: liff.isInClient(),
        isLoggedIn: liff.isLoggedIn(),
        os: liff.getOS() as string,
        isInAppBrowser: !liff.isInClient() && userAgent.includes('Line'),
      })
      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile()
        setProfile(profile)
      }
    } catch (error) {
      setMessage('LIFF init failed.')
      setError(`${error}`)
    }
  }

  useEffect(() => {
    liffInit()
  }, [message])

  const logout = () => {
    liff.logout()
  }

  const login = () => {
    liff.login()
  }

  if (profile.userId !== undefined) {
    console.log('login success')
    navigate('/update-info-member')
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 1000)
      }}
    >
      {({ errors, handleChange }) => (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
              <div className='card border-0 shadow rounded-3 my-5'>
                <div className='card-body p-4 p-sm-5'>
                  <h5 className='card-title text-center mb-5 fw-light fs-5'>Sign In</h5>
                  <Form>
                    <div className='mb-4'>
                      <Input
                        onChange={handleChange}
                        id='username'
                        name='username'
                        label='Username '
                        type='text'
                        errorMessage={errors.username}
                      />
                    </div>
                    <div className='mb-4'>
                      <Input
                        onChange={handleChange}
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        errorMessage={errors.password}
                      />
                    </div>
                    <p className='text-danger mb-5'>※登録内容は全て必須項目です。</p>
                    <div className='htmlForm-check mb-3'>
                      <input
                        className='htmlForm-check-input'
                        type='checkbox'
                        value=''
                        id='rememberPasswordCheck'
                      />
                      <label className='htmlForm-check-label' htmlFor='rememberPasswordCheck'>
                        Remember password
                      </label>
                    </div>
                    <div className='d-grid'>
                      <button
                        className='btn btn-primary btn-login text-uppercase fw-bold'
                        type='submit'
                      >
                        Sign in
                      </button>
                    </div>
                    <hr className='my-4' />
                    <div className='d-grid mb-2'>
                      <button
                        className='btn btn-google btn-login text-uppercase fw-bold'
                        type='button'
                      >
                        <i className='fab fa-google me-2'></i> Sign in with Google
                      </button>
                    </div>
                    <div className='d-grid'>
                      <button
                        className='btn btn-facebook btn-login text-uppercase fw-bold'
                        type='button'
                        onClick={login}
                      >
                        <i className='fab fa-facebook-f me-2'></i> Sign in with Line
                      </button>
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

export default Login
