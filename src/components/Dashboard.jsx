import React from 'react'
import { useSignOut, useAuthUser } from 'react-auth-kit'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const signout = useSignOut()
  const auth = useAuthUser()

  return (
    <div className='d-flex flex-column shadow w-50 p-3 mb-5 rounded text-white align-items-center justify-content-center m-auto'>
      <h1 className='text-white'>Hi {auth().username}</h1>
      <p>Welcome to your Dashboard!</p>
      <p>go to your <Link to='/profile'>Profile</Link></p>
      <button className='btn btn-primary' onClick={()=> signout()}>Logout</button>
    </div>
  )
}

export default Dashboard