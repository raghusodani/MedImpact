import React from 'react'
import Card from "react-bootstrap/Card";
import styler from './styler.css'

function IntroCard() {
    return (
        <div >
            <Card className="intro-card">
                <Card.Body className="intro-card-text">Welcome, XYZ.<p className="intro-card-sub-text">xyz@gmail.com</p></Card.Body>
            </Card>
        </div>
    )
}

export default IntroCard
