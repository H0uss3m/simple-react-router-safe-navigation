import React, { useContext } from 'react'
import AuthApi from './authApi'
import Cookies from 'js-cookie'

export default function Login () {
  const Auth = useContext(AuthApi)
  const handleClick = () => {
    Auth.SetAuth(true)
    Cookies.set('user', 'UserAuthenticated', { expires: 7 })
  }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
