import React from 'react'
import { useAuthUser } from 'react-auth-kit'

const Profile = () => {
    const  auth = useAuthUser()
  return (
    <div className='d-flex flex-column shadow w-50 p-3 mb-5 rounded text-white align-items-center justify-content-center m-auto'>
        <h1>{auth().username}</h1>
        <p>ID: {auth().id}</p>
        <p>Name: {auth().name}</p>
        <p>Surname: {auth().surname}</p>
    
  </div>
  )
}

export default Profile