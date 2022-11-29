import { useEffect, useState } from 'react'
import liff from '@line/liff'
import { useNavigate } from 'react-router-dom'

interface Profile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}

const Login = () => {
  const [message, setMessage] = useState('')
  const [data, setData] = useState({
    isInClient: false,
    os: 'ios',
    isInAppBrowser: false,
    isLoggedIn: false,
  })
  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  console.log(profile)

  if (profile.userId !== '' && profile.userId !== undefined) {
    console.log('login success', profile.userId)

    navigate('/home')
  }

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

  const renderLoginButton = () => {
    if (data.isLoggedIn) {
      return (
        <button data-testid='logout' onClick={logout}>
          Logout
        </button>
      )
    }
    return (
      <button data-testid='login' onClick={login}>
        Login
      </button>
    )
  }

  return (
    <div className=''>
      <h1>Thong le test get user id</h1>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      {data && (
        <div>
          <p data-testid='isInClient'>liff.isInClient: {String(data.isInClient)}</p>
          <p data-testid='os'>liff.getOS: {data.os}</p>
          <p data-testid='isInAppBrowser'>isInAppBrowser: {String(data.isInAppBrowser)}</p>
          <p data-testid='isLoggedIn'>liff.isLoggedIn: {String(data.isLoggedIn)}</p>
          {renderLoginButton()}
        </div>
      )}
      {profile && (
        <div>
          <img src={profile.pictureUrl} loading='lazy' />
          <p data-testid='userId'>userId: {profile.userId}</p>
          <p data-testid='displayName'>displayName: {profile.displayName}</p>
        </div>
      )}
    </div>
  )
}

export default Login
