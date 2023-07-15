import React from 'react'
import { Link } from 'react-router-dom'
import { useIsAuthenticated, useSignOut } from 'react-auth-kit'

const Navbar = () => {
    const isAuthenticated = useIsAuthenticated()
    const signOut = useSignOut()

    //{isAuthenticated() ? <a className="nav-link" onClick={() =>signOut() }>Logout</a> : <Link className="nav-link" to='/login'>Login</Link> }
    //{isAuthenticated() ? <Link className="nav-link" to='/'>Profil</Link> : <Link className="nav-link" to='/register'>Register</Link> }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">AuthApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        {isAuthenticated() ? <button className="nav-link btn" onClick={() =>signOut() }>Logout</button> : <Link className="nav-link" to='/login'>Login</Link> }
                    </li>
                    <li className="nav-item">
                        {isAuthenticated() ? <Link className="nav-link" to='/profile'>Profile</Link> : <Link className="nav-link" to='/register'>Register</Link> }
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar