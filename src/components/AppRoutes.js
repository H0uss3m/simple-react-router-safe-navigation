import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthApi from './authApi'
import Cookies from 'js-cookie'
import Routes from './Routes'

export default function AppRoutes () {
  const [auth, SetAuth] = useState(false)
  const readCookie = () => {
    const user = Cookies.get('user')
    if (user) {
      SetAuth(true)
    }
  }
  useEffect(() => {
    readCookie()
  }, [])
  return (
    <>
      <AuthApi.Provider value={{ auth, SetAuth }}>
        <Router>
          <Suspense fallback={<div>Chargement...</div>}>
            <Routes />
          </Suspense>
        </Router>
      </AuthApi.Provider>
    </>
  )
}
