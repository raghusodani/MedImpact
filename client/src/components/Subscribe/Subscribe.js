import React from 'react'
import SubscirbeStyling from './Subscribe.css'
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import Input from '../Input/Input';

function Subscribe({demand}) {
    const [subscribe,setSubscribe] = useState(
        {
            name: '',
            email: '',
            requirement: ''
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
                    ></Input>
                    <Input
                    placeholder='Email'
                    type="text"
                    name='email'
                    value = {subscribe.email}
                    className="subscribe-input" 
                    style={style}
                    ></Input>
                    <Input
                    placeholder='Medicine required'
                    type="text"
                    name='requirement'
                    value = {subscribe.requirement}
                    className="subscribe-input" 
                    style={style}
                    ></Input>
                    <button className='subscribe-button'>Send</button>
                </Card>
            </Card>
        </div>
    )
}
export default Subscribe
