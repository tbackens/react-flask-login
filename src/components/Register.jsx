import React from 'react'

const Register = () => {
  return (
    <div className='d-flex flex-column shadow p-3 w-50 rounded text-white align-items-center justify-content-center m-auto'>
        <form>
            <h3 className=''>Register</h3>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password1"/>
            </div>
            <div class="mb-3">
                <label htmlFor="password2" className="form-label">Repeat Password</label>
                <input type="password" className="form-control" id="password2"/>
            </div>
        </form>
        <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  )
}

export default Register