import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-100 d-flex flex-column'>
        <div>
            <Navbar/>
        </div>
        <div className='container my-auto'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout