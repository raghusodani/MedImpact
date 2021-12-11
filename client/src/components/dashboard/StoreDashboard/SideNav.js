import React from 'react'
import SideNavStyle from './SideNav.css'

function SideNav() {
    return (
        <div className="side-nav-container">
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        <div className="sidenav-link">
                            <a href="/dashboard" class="text-reset">Dashboard</a>
                        </div>   
                        <div className="sidenav-link">
                            <a href="/inventory" class="text-reset">Inventory</a>
                        </div>  
                        <div className="sidenav-link">
                            <a href="" class="text-reset">Billing</a>
                        </div>  
                        <div className="sidenav-link">
                            <a href="" class="text-reset">Invoice</a>
                        </div>  
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default SideNav
