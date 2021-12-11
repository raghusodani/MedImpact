import React from 'react'
import SideNav from './StoreDashboard/SideNav'
import NavBar from './StoreDashboard/NavBar'
import IntroCard from './StoreDashboard/IntroCard'
import DataCard from './StoreDashboard/DataCard'
import OutOfStockTable from './StoreDashboard/OutOfStockTable'
import ExpiryTable from './StoreDashboard/ExpiryTable'

function StoreDashboard() {
    return (
            <div className="Container">
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

export default StoreDashboard
