import React from 'react'

const Register = () => {
  return (
    <div className='d-flex flex-column shadow w-25 p-3 mb-5 rounded text-white align-items-center justify-content-center'>
        <form>
            <h3 className=''>Login</h3>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="password1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password1"/>
            </div>
            <div class="mb-3">
                <label for="password2" class="form-label">Repeat Password</label>
                <input type="password" class="form-control" id="password2"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Register