import React, { useContext } from 'react'
import AuthApi from './authApi'

export default function Login () {
  const Auth = useContext(AuthApi)
  const handleClick = () => {
    Auth.SetAuth(true)
  }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
