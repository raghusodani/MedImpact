import React, { useState, useEffect } from 'react'
import SideNav from './StoreDashboard/SideNav'
import NavBar from './StoreDashboard/NavBar'
import IntroCard from './StoreDashboard/IntroCard'
import DataCard from './StoreDashboard/DataCard'
import OutOfStockTable from './StoreDashboard/OutOfStockTable'
import ExpiryTable from './StoreDashboard/ExpiryTable'
import StoreDashStyle from './StoreDashboard.css'
function StoreDashboard({ medicalStore}) {
    const user = {
        name: 'Anuj Pillai',
        email: 'anujpillai1201@gmail.com'
    }
    const [invoices, setInvoices] = useState(0);
    const [purchases, setPurchases] = useState(0);
    useEffect(() => {
        medicalStore()?.then((res) => {
            setInvoices(res.invoices)
            setPurchases(res.purchases)
        })
        // invoicesCount()?.then((res) => {
        //     setInvoices(res);
        // })
        // purchasesCount()?.then((res) => {
        //     setPurchases(res);
        // })
    }, [])

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
                        <div className="Content-right">
                            <div className="records">
                                <h1 className="records-text">Statistics</h1>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <DataCard data={invoices} cardType="Invoices"/>
                                </div>
                                <div class="col-sm-4">
                                    <DataCard data={purchases} cardType="Purchases"/>
                                </div>
                                <div class="col-sm-4">
                                    <DataCard cardType={"Profit"} data={'XXX'} />
                                </div>
                            </div>
                            <div className="records">
                                <h1 className="records-text">Records</h1>
                            </div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <OutOfStockTable />
                                </div>
                                <div class="col-sm-7">
                                    <ExpiryTable />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
    )
}

export default StoreDashboard
