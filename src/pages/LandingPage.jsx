import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <ul>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/signup'>Signup</Link>
            <br/>
            
            <Link to='/calculator'>calculator</Link>
        </ul>
    </div>
  )
}

export default LandingPage