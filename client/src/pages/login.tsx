// Lib
import { useEffect, useState } from 'react'
import liff from '@line/liff'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import axios from 'axios'

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
  // statusMessage?: string
}

function Login() {
  const [listUser, setListUser] = useState([])
  const [watting, setWatting] = useState(false)

  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [data, setData] = useState({
    isInClient: false,
    os: '',
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
        console.log(profile)
        const res = await axios.get(
          'https://sandy-halved-pleasure.glitch.me/users?lineId=' + profile.userId,
        )
        if (res.data.length === 1) {
          console.log('bjhfbdsjhfbsdhjfbsdjh', res.data[1]);
          
          localStorage.setItem('userSession', JSON.stringify(res.data[0], res.data[1]))
          navigate('/mypage')
          console.log(listUser.length)
        } else navigate('/update-info-member', { state: { lineId: profile.userId } })
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

  // Validation form login
  const validateForm = (values: IAccount) => {
    const errors = {} as IAccount
    if (!values.username) {
      errors.username = ''
    } else if (values.username.length > 15) {
      errors.username = ''
    }

    if (!values.password) {
      errors.password = ''
    } else if (values.password.length > 15) {
      errors.password = ''
    }

    return errors
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        axios
          .post('https://sandy-halved-pleasure.glitch.me/users', values)
          .then((res) => console.log(res.data))
        setSubmitting(false)
      }}
    >
      {({ errors, handleChange, isSubmitting }) => (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
              <div className='card border-0 shadow rounded-3 my-5'>
                <div className='card-body p-4 p-sm-5'>
                  <h2 className='text-center mb-5'>ログイン</h2>
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
                    <div className='htmlForm-check mb-3'>
                      <input
                        className='htmlForm-check-input'
                        type='checkbox'
                        value=''
                        id='rememberPasswordCheck'
                      />
                      <label className='htmlForm-check-label' htmlFor='rememberPasswordCheck'>
                        パスワードを覚える
                      </label>
                      <Link to='/register-member'>
                        <a className='register' href=''>
                          登録する
                        </a>
                      </Link>
                    </div>
                    <div className='d-grid'>
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
                          サインイン
                        </button>
                      )}
                    </div>
                    <hr className='my-4' />
                    <div className='d-grid mb-2'>
                      <button
                        className='btn btn-google btn-login text-uppercase fw-bold'
                        type='button'
                      >
                        <i className='fab fa-google me-2'></i> Google でログイン
                      </button>
                    </div>
                    <div className='d-grid'>
                      <button
                        className='btn btn-line btn-login text-uppercase fw-bold'
                        type='button'
                        onClick={login}
                      >
                        <i className='fab fa-facebook-f me-2'></i> Line でログイン
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
