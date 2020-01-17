import React, { Suspense, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthApi from './authApi'
import Routes from './Routes'
export default function AppRoutes () {
  const [auth, SetAuth] = useState(false)
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
