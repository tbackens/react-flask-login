import React, { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        name: '',
        surname: '',
        password1: '',
        password2: '',
    })

    const onFormChange = (e) => {
        e.preventDefault();
        const {name, value } = e.target;
        setFormData(prev =>  ({
            ...prev,
            [name]: value
        }))
    }

    const signup = async () => {
        try {
            const res = await fetch('http://localhost:5001/signup', {
                method :'POST',
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    username:formData.username,
                    name:formData.name,
                    surname:formData.surname,
                    password1:formData.password1,
                    password2:formData.password2,
                })
            })
            const data = await res.json()
            return data
            
        }
        catch(err) {
            console.log(err)
        }
    }
  return (
    <div className='d-flex flex-column shadow p-3 w-50 rounded text-white align-items-center justify-content-center m-auto'>
        <form>
            <h3 className=''>Register</h3>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" value={formData.username} onChange={onFormChange} name='username'/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={formData.name} onChange={onFormChange} name='name'/>
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label">Surname</label>
                <input type="text" className="form-control" id="surname" value={formData.surname} onChange={onFormChange} name='surname'/>
            </div>
            <div className="mb-3">
                <label htmlFor="password1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password1" value={formData.password1} onChange={onFormChange} name='password1'/>
            </div>
            <div className="mb-3">
                <label htmlFor="password2" className="form-label">Repeat Password</label>
                <input type="password" className="form-control" id="password2" value={formData.password2} onChange={onFormChange} name='password2'/>
            </div>
        </form>
        <button onClick={signup} className="btn btn-primary">Submit</button>
    </div>
  )
}

export default Register