import React from 'react'
import SideNav from './StoreDashboard/SideNav'
import IntroCard from './StoreDashboard/IntroCard'
import Card from "react-bootstrap/Card";
import DonorDashStyling from './DonorDashboard.css'
import Progress from './DonorDashboard/ProgressBar';
import TotalDons from './DonorDashboard/TotalDons';

function DonorDashboard() {
    const user = {name:'Anuj',email:'anujpillai1201@gmail.com'}
    return (
        <div className="Container">
            <div class="row">
                <div class="col-sm-2">
                    <div className="Content-left">
                        <SideNav />
                    </div>
                </div>
                <div class="col-sm-10">
                    <IntroCard user={user}/>
                    <TotalDons></TotalDons>
                    <Progress></Progress>
                </div>
            </div>
        </div>
    )
}

export default DonorDashboard
