import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthApi from './authApi'
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const Auth = useContext(AuthApi)
  return (
    <Route
      {...rest}
      render={() => (Auth.auth ? (<Component />) : (<Redirect to='/login' />))}
    />
  )
}
export default ProtectedRoute
