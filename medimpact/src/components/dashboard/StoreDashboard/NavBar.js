import React from 'react'
import Card from "react-bootstrap/Card";
import SideNav from './SideNav';
import styler from './styler.css'

function NavBar() {
    return (
        <div>
            <Card className="nav-block">
            </Card>
            <div className="nav-container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <SideNav></SideNav>
                    <a class="navbar-brand" href="#">Med<strong>Impact</strong></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Search Medicines</a>
                        <a class="nav-item nav-link" href="#">Search Donors</a>
                        </div>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}

export default NavBar
