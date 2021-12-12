import React from 'react'
import { useParams } from 'react-router-dom'
import DataCard from '../../components/dashboard/StoreDashboard/DataCard'
import IntroCard from '../../components/dashboard/StoreDashboard/IntroCard'
import NavBar from '../../components/dashboard/StoreDashboard/NavBar'
import SideNav from '../../components/dashboard/StoreDashboard/SideNav'
import ExpiryTable from '../../components/dashboard/StoreDashboard/ExpiryTable'
import OutOfStockTable from '../../components/dashboard/StoreDashboard/OutOfStockTable'
import DonorDashboard from '../../components/dashboard/DonorDashboard'
import StoreDashboard from '../../components/dashboard/StoreDashboard'

function Dashboard({medicalStore}) {
    const type = useParams().type
    console.log(type)
    return (
        <div>
            {type === "Donor" ? <DonorDashboard /> : <StoreDashboard medicalStore={medicalStore} />}
        </div>
    )
}

export default Dashboard
