import React from 'react'
import Card from "react-bootstrap/Card";
import styler from './styler.css'

function TitleCard() {
    return (
        <div >
            <Card className="intro-card">
                <Card.Body className="intro-card-text">Inventory</Card.Body>
            </Card>
        </div>
    )
}

export default TitleCard
