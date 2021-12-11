import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { setSessionStorage } from '../../../helpers/LocalStorageValidator'
import { useHistory } from 'react-router-dom'
function Login({ setup }) {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) => {

        e.preventDefault()
        if (email === '' || password === '') {
            setError('Email and Password are required')
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters')
        }
        else {
            console.log("🚀 login payload", email, password)
            axios.post('https://medimpact.herokuapp.com/auth/login', {
                email,
                password
            })
                .then(res => {
                    console.log("🚀 login", res.data)
                    setSessionStorage(res.data.Authorization, res.data.type)
                    if (res.data.isFirstLogin) {
                        history.push('/signupDetails')
                    }
                    else {
                        history.push(`/dashboard/${res.data.type}`)
                        window.location.reload()
                    }
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 400) {
                        alert("Invalid email or password")
                    }
                })
        }

    }
    return (
        <div className="login-container" style={{ height: '81vh', marginTop: "50px" }}>
            <div className='card col-6 m-auto mt-4'>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 card-body">
                    <div className="max-w-md w-full space-y-8 card-title">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Log in to your account
                            </h2>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* error line */}
                            {error && <div className="text-red-500 text-sm font-medium">*{error}</div>}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900" >
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" style={{
                                        color: '#4CCCC0',
                                    }}>
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    style={{
                                        backgroundColor: '#4CCCC0',
                                    }}
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                    Sign in
                                </button>
                            </div>
                            <div>
                                <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500" style={{
                                    color: '#4CCCC0',
                                }}>
                                    Don't have an account ? Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
