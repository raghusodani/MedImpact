import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function VerifyEmail({setup}) {
     const {token} = useParams()
     const [countDown, setCountDown] = useState(10)
    useEffect(() => {
        axios.get(`https://medimpact.herokuapp.com/auth/verify/${token}`)
        .then(res => {
            console.log("🚀 get verify", res.data)
            if(res.data.success){
                setCountDown(5)
                setTimeout(function() {
                    window.location.replace('http://localhost:3000/login');
                  }, 5000);
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // useEffect(() => {
    //     setup();
    // }, [])
    //decrese countdown by 1 every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDown - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [countDown])

    return (
        <div className='card border col-6 rounded  d-flex flex-column justify-content-center' 
            style={{
                margin: 'auto',
                marginTop: '10%',
            }}
        >
            <h1 className='p-2'>Your Email is Verified</h1>
            <h3 className='p-2'>Redirecting to login in {countDown}</h3>
                or you can directly go to login page
            <button className='btn btn-primary col-3 m-auto' onClick={() => window.location.replace('http://localhost:3000/login')}>Login</button>
        </div>
    )
}

export default VerifyEmail
