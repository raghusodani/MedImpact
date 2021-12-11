import React, { useEffect } from 'react'
import Card from "react-bootstrap/Card";
import { useHistory } from 'react-router-dom';
import SideNav from './SideNav';
import styler from './styler.css'
import { getToken, removeToken, removeType  } from '../../../helpers/LocalStorageValidator'
function NavBar() {
    const history = useHistory()
    const handleLogout = () => {
        removeToken()
        removeType()
        handleLogin()
    }
    const handleLogin = () => {
        history.push('/login');
        window.location.reload()
    }
    return (
        <div>
            <div className="nav-container">
                <nav class="navbar navbar-expand-lg ">
                    <a class="navbar-brand" href="/home">Med<strong>Impact</strong></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                        <a class="nav-item" href="/home">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item" href="/search/medicine">Search Medicines</a>
                        <a class="nav-item" href="/search/donor">Search Donors</a>
                        <a class="nav-item" href="/dashboard/store">Dashboard</a>
                        <button className='btn-logout' onClick={getToken()?.length>0 ? handleLogout : handleLogin}>{getToken()?.length>0 ? "Logout" : "Login"}</button>
                        
                        
                        </div>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}

export default NavBar
