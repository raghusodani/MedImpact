import React from 'react'
import TitleCard from '../../components/dashboard/StoreDashboard/TtileCard'
import SideNav from '../../components/dashboard/StoreDashboard/SideNav'
import TitleInvoice from '../../components/dashboard/StoreDashboard/TitleInvoice'
import InvoiceForm from '../../components/dashboard/StoreDashboard/InvoiceForm'
import Card from "react-bootstrap/Card";
import MedicineForm from '../../components/dashboard/StoreDashboard/MedicineForm'
import InvoiceStyler from './Invoice.css'

function Invoice() {
    return (
        <div className='Container'>
            <div class="row">
                <div class="col-sm-2">
                    <div className="Content-left">
                        <SideNav></SideNav> 
                    </div>
                </div>
                <div class="col-sm-10">
                    <TitleInvoice></TitleInvoice>
                    <Card className='invoice-card'>
                        <div class="row">
                            <div class="col-sm-5">
                                <InvoiceForm></InvoiceForm>
                            </div>
                            <div class="col-sm-7">
                                <MedicineForm></MedicineForm>
                            </div>
                        </div>
                        <div className='invoice-submit'>
                            <button >Submit</button>
                        </div>
                    </Card>
                </div>
            </div> 
        </div>
    )
}

export default Invoice
