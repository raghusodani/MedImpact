import React, {useEffect} from 'react'
import SubscirbeStyling from './Subscribe.css'
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import Input from '../Input/Input';
import axios from 'axios';

function Subscribe({type}) {
    const [fields, setFields] = useState(type)
    console.log(type)
    useEffect(()=>{
        setFields(type)
    },[type])
    
    const [data, setdata] = useState({
		center: {lat: 37.772,lng: -122.214},
	});
	
	
	
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	  };

    const success = (position) => {
		setdata({
			center:{
				lat:position.coords.latitude,
				lng:position.coords.longitude
			}
		});
	};

    const error=(err)=> {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
        // eslint-disable-next-line
      },[]);
   
    const [subscribe,setSubscribe] = useState(
        {
            name: '',
            email: '',
            medicine: null,
            bloodGroup: null
        });
    const style = {
        margin:'auto',
        width:'80%',
        marginTop:'5%',
        color:'black',
        fontFamily:'Source Sans Pro',
        fontSize:'16px',
    }
    const style1 = {
        margin:'auto',
        width:'80%',
        marginTop:'10%',
        color:'black',
        fontFamily:'Source Sans Pro',
        fontSize:'16px',
    }

    const HandleSubmit = (e) => {
		console.log(e);
		e.preventDefault();
        console.log(data.center.lat)

        const apiData = {
            name:subscribe.name,
            email:subscribe.email,
            lat:data.center.lat,
            lng:data.center.lng,
            bloodGroup: subscribe.bloodGroup,
            medicine: subscribe.medicine
        }
        
        axios.post("https://medimpact.herokuapp.com/subscribe",apiData)
        .then((reason)=>{
            alert("Subscribed Successfully!");
            window.location.reload(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className='subscribe-container'>
            <Card className="subscribe-card">
                <h1 className='subscribe-title'>
                    Subscribe for Updates
                </h1>
                <Card className='noti-card'>
                    <h1 className='noti-title'>Email Notification</h1>
                    <p className='noti-text'>If medicine is not available presently, 
                    you will recieve email notification whenever it is available 
                    in your vicinity.</p>
                    <hr></hr>
                    <Input
                    placeholder='Name'
                    type="text"
                    name='name'
                    value = {subscribe.name}
                    className="subscribe-input" 
                    style={style1}
                    onChange={(e) => {
					setSubscribe({ ...subscribe, [e.target.name]: e.target.value });
					}}
                    ></Input>
                    <Input
                    placeholder='Email'
                    type="text"
                    name='email'
                    value = {subscribe.email}
                    className="subscribe-input" 
                    style={style}
                    onChange={(e) => {
					setSubscribe({ ...subscribe, [e.target.name]: e.target.value });
					}}
                    ></Input>
                    {
                        fields === "medicine" ?
                        (
                    <Input
                    placeholder='Medicine required'
                    type="text"
                    name='medicine'
                    value = {subscribe?.medicine}
                    className="subscribe-input" 
                    style={style}
                    onChange={(e) => {
					setSubscribe({ ...subscribe, [e.target.name]: e.target.value });
					}}
                    ></Input>
                        ) : (
                    <Input
                    placeholder='Blood Group required'
                    type="text"
                    name='bloodGroup'
                    value = {subscribe?.bloodGroup}
                    className="subscribe-input" 
                    style={style}
                    onChange={(e) => {
					setSubscribe({ ...subscribe, [e.target.name]: e.target.value });
					}}
                    ></Input>
                        )
                    }
                   
                    <button className='subscribe-button' onClick={(e) => HandleSubmit(e)}>Send</button>
                </Card>
            </Card>
        </div>
    )
}
export default Subscribe
