import React from 'react'
import styling from './styler.css'
import Card from "react-bootstrap/Card";

function ProgressBar() {
    return (
        <div class="progress-body">
            <Card className='progress-card'>
                <h1 className='total-title'>Time since last donation : 69</h1>
            </Card>
        </div>
    )
}

export default ProgressBar
