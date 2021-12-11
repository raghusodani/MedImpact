import React from 'react'
import SideNav from '../../components/dashboard/StoreDashboard/SideNav'
import NavBar from '../../components/dashboard/StoreDashboard/NavBar'
import IntroCard from '../../components/dashboard/StoreDashboard/IntroCard'
import TitleCard from '../../components/dashboard/StoreDashboard/TtileCard'
import InventoryTable from '../../components/dashboard/StoreDashboard/InventoryTable'

function Inventory() {
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
                    <TitleCard></TitleCard>
                        <div className="Content-right">
                            <InventoryTable></InventoryTable>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Inventory