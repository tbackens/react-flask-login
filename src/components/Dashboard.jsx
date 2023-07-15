import React from 'react'
import { useSignOut } from 'react-auth-kit'


const Dashboard = () => {
  const signout = useSignOut()

  return (
    <div className='d-flex flex-column shadow w-50 p-3 mb-5 rounded text-white align-items-center justify-content-center m-auto'>
      <h1 className='text-white'>Hi testuser</h1>
      <p>Welcome to your Dashboard</p>
      <button className='btn btn-primary' onClick={()=> signout()}>Logout</button>
    </div>
  )
}

export default Dashboard