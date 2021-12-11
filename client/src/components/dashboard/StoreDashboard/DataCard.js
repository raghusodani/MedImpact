import React from 'react'
import Card from "react-bootstrap/Card";
import styler from './styler.css'

function DataCard() {
    return (
        <div >
            <Card className="data-card">
                <Card.Body className="data-card-text">7<p className="data-card-sub-text">Purchases</p></Card.Body>
            </Card>
        </div>
    )
}

export default DataCard
