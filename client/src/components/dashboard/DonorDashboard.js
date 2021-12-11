import React from 'react'
import SideNav from './StoreDashboard/SideNav'
import IntroCard from './StoreDashboard/IntroCard'

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
                    <h1>Hello from donor dashboard</h1>
                </div>
            </div>
        </div>
    )
}

export default DonorDashboard
