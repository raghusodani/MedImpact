import React from 'react'
import { useParams } from 'react-router-dom'
import DonorDashboard from '../../components/dashboard/DonorDashboard'
import StoreDashboard from '../../components/dashboard/StoreDashboard'

function Dashboard() {
    const type = useParams().type
    console.log(type)
    return (
        <div>
            {type==="Donor" ? <DonorDashboard/> : <StoreDashboard/>}
        </div>
    )
}

export default Dashboard
