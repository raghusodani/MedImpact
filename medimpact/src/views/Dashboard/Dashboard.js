import React from 'react'
import { useParams } from 'react-router-dom'

function Dashboard() {
    const type = useParams().type
    console.log(type)
    return (
        <div>
            Hello Dashboard
        </div>
    )
}

export default Dashboard
