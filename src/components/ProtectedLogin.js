import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthApi from './authApi'

const ProtectedLogin = ({ component: Component, ...rest }) => {
  const Auth = useContext(AuthApi)
  return (
    <Route
      {...rest}
      render={() => (!Auth.auth ? (<Component />) : (<Redirect to='/' />))}
    />
  )
}
export default ProtectedLogin
