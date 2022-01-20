import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import heroStyles from '../styles/heroStyles'

const Home = ({ user }) => {
  if (user) {
    return <Navigate to="train" />
  }
  return (
    <div style={heroStyles}>
      <h1>Doomsday Rule Trainer</h1>
      <h2 className='mb-3'>Sign In to start training!</h2>
      <Link to='/sign-in'>
        <button className='btn btn-dark btn-lg'>
  Sign In
        </button>
      </Link>

    </div>
  )
}

export default Home
