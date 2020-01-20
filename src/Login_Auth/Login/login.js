import React, { useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux';
import { users } from '../../data/users'
import { loginSuccess, loginFail } from '../../Redux/Actions/auth'

const Login = () => {

    const dispatch = useDispatch()

    const initialState = {
        email: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialState)
    const { email, password } = credentials;

    const onChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault()

        const isRegistered = users.find(user => user.email === credentials.email && user.password === credentials.password)
        if (isRegistered)
            dispatch(loginSuccess(isRegistered))
        else
            dispatch(loginFail())

        setCredentials(initialState)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin" onSubmit={e => onSubmit(e)}>
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" value={email} onChange={e => onChange(e)} required autoFocus />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} required />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;