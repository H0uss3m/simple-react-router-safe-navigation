import React, { useContext, lazy } from 'react'
import AuthApi from './authApi'
import { Link, Route, Switch} from 'react-router-dom'
import Cookies from 'js-cookie'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default function Navbar () {
  const Auth = useContext(AuthApi)
  const handleClick = () =>{
    Auth.SetAuth(false)
    Cookies.remove('user')
  }
  return (
    <nav>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <Link to='/'>
            <h2>Home</h2>
          </Link>
        </div>
        <div>
          <Link to='/about'>
            <h2>About</h2>
          </Link>
        </div>
        <button onClick={handleClick}>logout</button>
      </div>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/about' component={ About }/>
      </Switch>
    </nav>
  )
}
