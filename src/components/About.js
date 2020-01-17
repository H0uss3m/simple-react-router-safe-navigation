import React from 'react'
import Detail from './Details'
export default function Home () {
  const id = 'User Name'
  return (
    <div>
      <center>
        <h1>About Page</h1>
      </center>
      <Detail id={id} />
    </div>
  )
}
