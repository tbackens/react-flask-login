import React from 'react'
import { useSignOut, useIsAuthenticated } from 'react-auth-kit'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const signout = useSignOut()
  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()

  if(isAuthenticated()) {
    return(
      <div className='d-flex flex-column shadow w-50 p-3 mb-5 rounded text-white align-items-center justify-content-center m-auto'>
        <h1>AuthApp</h1>
        <h3>A basic app for user authentication.</h3>
        <p>You are logged in! Go to your <Link to='/dashboard'>Dashboard</Link></p>
        <button className='btn btn-primary' onClick={() => signout()}>Logout</button>
      </div>
    )
  }

  return (
    
    <div className='d-flex flex-column shadow w-50 p-3 mb-5 rounded text-white align-items-center justify-content-center m-auto'>
      <h1>AuthApp</h1>
      <h3>A basic app for user authentication.</h3>
      <button className='btn btn-primary mt-3' onClick={() => navigate('/login')}>Login</button>
      <p className='m-2'>or <Link to='/register'>register</Link></p>
    </div>
  )
}

export default Home