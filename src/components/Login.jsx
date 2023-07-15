import React, { useState } from 'react'
import { useSignIn, useIsAuthenticated } from 'react-auth-kit'
import { useNavigate} from 'react-router-dom'


const Login = () => {
    const signIn = useSignIn()
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')

    const handleUsernameChange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }


    const getToken = async () => {
        try {
            const res = await fetch('http://127.0.0.1:5001/token', {
                method :'POST',
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    username:username,
                    password:password
                })
            })
            const data = await res.json()
            console.log(data)
            setPassword('')
            setUsername('')
            if(res.ok) {
                if(signIn(
                    {
                        token: data.access_token,
                        tokenType: "Bearer",
                        expiresIn:2,
                        
                    }
                )) {
                    console.log('logged in')
                    navigate('/dashboard')
                }
            }
            else {
                setErrMessage(data.msg)
            }
        }
        catch(err) {
            console.log(err)
        }
    }
    const handleSubmit = () => {
        setErrMessage('');
        getToken()
    }



    if (isAuthenticated()) {
        return (
            navigate('/dashboard'))
    }
    else {
        return (
            <div className='d-flex flex-column shadow w-50 p-3 rounded text-white align-items-center justify-content-center m-auto'>
                <form>
                    <h3 className=''>Login</h3>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password
                        } onChange={handlePasswordChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me!</label>
                    </div>
                    
                </form>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                <p className='text-danger pt-2'>{errMessage}</p>
            </div>
        )
    }
}

export default Login