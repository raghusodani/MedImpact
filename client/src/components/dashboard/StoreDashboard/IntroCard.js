import React from 'react'
import Card from "react-bootstrap/Card";
import styler from './styler.css'

function IntroCard({ user }) {
    //humanize the string
    const humanize = (str) => {
        return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
        
    }

    return (
        <div >
            <Card className="intro-card">
                <Card.Body className="intro-card-text">
                Welcome, {humanize(user.name)}.
                <p className="intro-card-sub-text">{user.email}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default IntroCard
