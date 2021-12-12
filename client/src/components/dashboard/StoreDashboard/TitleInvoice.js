import React from 'react'
import Card from "react-bootstrap/Card";
import styler from './styler.css'

function TitleInvoice({ text }) {
    return (
        <div >
            <Card className="intro-card">
                <Card.Body className="intro-card-text">{text}</Card.Body>
            </Card>
        </div>
    )
}

export default TitleInvoice
