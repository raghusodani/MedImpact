import React from 'react'
import { useParams } from 'react-router-dom'
import DataCard from '../../components/dashboard/StoreDashboard/DataCard'
import IntroCard from '../../components/dashboard/StoreDashboard/IntroCard'
import NavBar from '../../components/dashboard/StoreDashboard/NavBar'
import Styler from '../../components/dashboard/StoreDashboard/styler.css'
import SideNav from '../../components/dashboard/StoreDashboard/SideNav'

function Dashboard() {
    const type = useParams().type
    console.log(type)
    return (
        <div className="Container">
            <NavBar></NavBar>
            <IntroCard></IntroCard>
            <DataCard></DataCard>
        </div>
    )
}

export default Dashboard
