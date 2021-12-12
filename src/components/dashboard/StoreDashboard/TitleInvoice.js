import React from 'react'
import Card from "react-bootstrap/Card";
import styler from './styler.css'

function TitleInvoice() {
    return (
        <div >
            <Card className="intro-card">
                <Card.Body className="intro-card-text">Invoice</Card.Body>
            </Card>
        </div>
    )
}

export default TitleInvoice
