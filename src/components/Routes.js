import React, { lazy, useContext} from "react"
import {  Switch } from "react-router-dom"
import AuthApi from "./authApi"
const Navbar = lazy(() => import("./navbar"))
const Login = lazy(() => import("./Login"))
const ProtectedRoute = lazy(() => import("./ProtectedRoute"))
const ProtectedLogin = lazy(() => import("./ProtectedLogin"))

export default function Routes() {
  const Auth = useContext(AuthApi)

  return (
    <Switch>
      <ProtectedLogin path="/login" auth={Auth.auth} component={Login} />
      <ProtectedRoute exact path="/*" auth={Auth.auth} component={Navbar} />
    </Switch>
  )
}
