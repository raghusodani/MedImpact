import React,{useEffect, useState} from 'react'
import TitleCard from '../../components/dashboard/StoreDashboard/TtileCard'
import SideNav from '../../components/dashboard/StoreDashboard/SideNav'
import TitleInvoice from '../../components/dashboard/StoreDashboard/TitleInvoice'
import InvoiceForm from '../../components/dashboard/StoreDashboard/InvoiceForm'
import Card from "react-bootstrap/Card";
import MedicineForm from '../../components/dashboard/StoreDashboard/MedicineForm'
import InvoiceStyler from './Invoice.css'
import InvoiceTable from '../../components/dashboard/StoreDashboard/InvoiceTable'

function Invoice() {
    const [addMedicine, setAddMedicine] = useState([]);
    const [distributorData, setDistributorData] = useState({});
    const handleMedicineAddition = (medicine) => {
        setAddMedicine([...addMedicine, medicine]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(addMedicine, distributorData);
            //// Add to blockchain
            // medicine = {
            //     medicineName: '',
            //     quantity: '',
            //     Price: null,
            //     MRP:  null,
            //     batchId: '',
            //     ManDate: null,
            //     ExpDate: null,
            // }
            // distributorData = {
            //     distributorName:'',
            //     billNumber:'',
            //     billDate:'',
            //     companyName:'',
            //     discount:'',
            //     total:''
            // }

    };
    const handleInvoiceData = (data) => {
        setDistributorData(data);
    };
    useEffect(() => {
        console.log(addMedicine);
    }, [addMedicine]);
    return (
        <div className='Container'>
            <div class="row">
                <div class="col-sm-2">
                    <div className="Content-left">
                        <SideNav></SideNav> 
                    </div>
                </div>
                <div class="col-sm-10">
                    <TitleInvoice text={'Invoice'}></TitleInvoice>
                    <Card className='invoice-card ' style={{borderRadius:"10px"}}>
                        <div class="row">
                            <div class="col-sm-5">
                                <InvoiceForm submitInvoice={handleInvoiceData} />
                                {
                                    addMedicine?.length > 0 &&
                                    <InvoiceTable list={addMedicine} />}
                            </div>
                            <div class="col-sm-7">
                                <MedicineForm 
                                    onAddition={handleMedicineAddition} />
                            </div>
                        </div>
                        <div className='invoice-submit-container'>
                            <button className='invoice-submit-btn' onClick={handleSubmit}>Submit</button>
                        </div>
                    </Card>
                </div>
            </div> 
        </div>
    )
}

export default Invoice
