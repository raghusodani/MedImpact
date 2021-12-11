import React from 'react'
import { useParams } from 'react-router-dom'
import DataCard from '../../components/dashboard/StoreDashboard/DataCard'
import IntroCard from '../../components/dashboard/StoreDashboard/IntroCard'
import NavBar from '../../components/dashboard/StoreDashboard/NavBar'
import styling from './Dashboard.css'
import SideNav from '../../components/dashboard/StoreDashboard/SideNav'
import ExpiryTable from '../../components/dashboard/StoreDashboard/ExpiryTable'
import OutOfStockTable from '../../components/dashboard/StoreDashboard/OutOfStockTable'

function Dashboard() {
    const type = useParams().type
    console.log(type)
    return (
        <div className="Container">
            <NavBar></NavBar>
            <div class="row">
                <div class="col-sm-2">
                    <div className="Content-left">
                        <SideNav></SideNav> 
                    </div>
                    
                </div>
                <div class="col-sm-10">
                    <IntroCard></IntroCard>
                        <div className="Content-right">
                            <div className="records">
                                <h1 className="records-text">Statistics</h1>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <DataCard></DataCard>
                                </div>
                                <div class="col-sm-4">
                                    <DataCard></DataCard>
                                </div>
                                <div class="col-sm-4">
                                    <DataCard></DataCard>
                                </div>
                            </div>
                            <div className="records">
                                <h1 className="records-text">Records</h1>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <OutOfStockTable></OutOfStockTable>
                                </div>
                                <div class="col-sm-7">
                                    <ExpiryTable></ExpiryTable>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
