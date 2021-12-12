import React, { useState, useEffect } from 'react'
import SideNav from '../../components/dashboard/StoreDashboard/SideNav'
import NavBar from '../../components/dashboard/StoreDashboard/NavBar'
import IntroCard from '../../components/dashboard/StoreDashboard/IntroCard'
import TitleCard from '../../components/dashboard/StoreDashboard/TtileCard'
import InventoryTable from '../../components/dashboard/StoreDashboard/InventoryTable'

function Inventory({getMedicines, getBills}) {
    
    const [medicines, setMedicines] = useState({})
    const [bills, setBills] = useState({})
    let a = true;

    useEffect(() => {
        getMedicines()?.then((res) => {
            setMedicines(res);
            console.log("res", res)
            
        });
    }, [])

    // useEffect(() => {
    //     getBills()?.then((res) => {
    //         setBills(res);
    //         console.log("res", res)
    //     });
    // }, [])

    return (
        <div className="Container">
            <div class="row">
                <div class="col-sm-2">
                    <div className="Content-left">
                        <SideNav></SideNav> 
                    </div>
                    
                </div>
                <div class="col-sm-10">
                    <TitleCard></TitleCard>
                        <div className="Content-right">
                            <InventoryTable medicines={medicines}/>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Inventory