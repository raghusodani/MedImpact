import React, { useState } from 'react'
import axios from 'axios'
import {useHistory } from 'react-router-dom';
import Input from '../../../components/Input/Input';
function Signup() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [error, setError] = useState('');
    const handleEmailChange = (e) => {
        setError('');
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setError('');
        setPassword(e.target.value);
    }

    // useState(() => {
    //     setup();
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === '' ){
            setError('Email is required');
        }
        else if(password === ''){
            setError('Password is required');   
        }
        else if(userType === ''){
            setError('User Type is required');
        }
        else if(password.length < 6){
            setError('Password must be at least 6 characters');
        }
        else{
        console.log(email);
        console.log(password);
        console.log(userType);
        axios.post('https://medimpact.herokuapp.com/auth/register', {
            email: email,
            password: password,
            type: userType
          })
          .then((response) => {
            console.log(response);
            if (response.data.message) {
                alert(response.data.message);
            } 
            else {
                alert("Registered Successfully");
                history.push("/login");
            }
          })
          .catch(function (error) {
              alert("Email Already Exists")
            console.log(error);
          });
          e.target.reset();}
    }
    return (
        <div className="container" style={{height:'81vh',marginTop:"50px"}}>
        <div className='card col-6 m-auto mt-4' >
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 card-body">
                <div className="max-w-md w-full space-y-8 card-title">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create a new account 
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6"  onSubmit = {handleSubmit}>
                        <input type="hidden" name="remember" value="true"/>
                        <div className="rounded-md shadow-none -space-y-px flex-col gap-x-2">

                            <Input type='Email' placeholder="Email" value={email} onChange={handleEmailChange}  />
                            <Input type='Password' placeholder="Password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div>               
                            <select className="w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 " name="usertype" 
                            onChange={(e) => {setError('');setUserType(e.target.value)}}>
                                <option value="">
                                    Select User Type
                                </option>
                                <option value="Store">
                                    Store Owner
                                </option>
                                <option value="Donor">
                                    Blood Donor
                                </option>
                            </select>
                        </div>
                        {
                            error && <div className="text-red-600 text-sm font-medium">*{error}</div>
                        }
                        <div className="flex items-center justify-between">
                            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 m-auto" style={{
                                color:'#4CCCC0'
                            }}>
                                Already have an account ? Sign In
                            </a>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                style={{
                                    backgroundColor: '#4CCCC0',
                                }}
                            >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            </span>
                            Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup