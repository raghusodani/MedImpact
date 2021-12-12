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
            
                    <IntroCard user={user}/>
                    <TotalDons></TotalDons>
                    <Progress></Progress>
        </div>
    )
}

export default DonorDashboard
