import React from 'react'
import Card from "react-bootstrap/Card";
import styler from './styler.css'

function DataCard({data, cardType}) {
    return (
        <div >
            <Card className="data-card">
                <Card.Body className="data-card-text">{data}<p className="data-card-sub-text">{cardType}</p></Card.Body>
            </Card>
        </div>
    )
}

export default DataCard
