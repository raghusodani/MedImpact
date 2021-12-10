import React, { useState } from 'react'
import axios from 'axios'
import {useHistory } from 'react-router-dom';

function Signup() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(userType);
        axios.post('/user', {
            email: email,
            lastName: password,
            usertype: userType
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
            console.log(error);
          });
          e.target.reset();
    }
    return (
        <div className='card col-6 m-auto mt-4'>
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 card-body">
                <div class="max-w-md w-full space-y-8 card-title">
                    <div>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create a new account 
                        </h2>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST" onSubmit = {handleSubmit}>
                        <input type="hidden" name="remember" value="true"/>
                        <div class="rounded-md shadow-none -space-y-px flex-col gap-x-2">
                            <div>
                                <label for="email-address" class="sr-only">Your e-mail</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" 
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="password" class="sr-only">Password</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div>               
                            <select class="w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 mt-2" name="usertype" 
                            onChange={(e) => setUserType(e.target.value)}>
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
                        <div class="flex items-center justify-between">
                            <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500 m-auto">
                                Already have an account ? Sign In
                            </a>
                        </div>

                        <div>
                            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            </span>
                            Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup