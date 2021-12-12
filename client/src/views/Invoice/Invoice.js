import React,{useEffect, useState} from 'react'
import TitleCard from '../../components/dashboard/StoreDashboard/TtileCard'
import SideNav from '../../components/dashboard/StoreDashboard/SideNav'
import TitleInvoice from '../../components/dashboard/StoreDashboard/TitleInvoice'
import InvoiceForm from '../../components/dashboard/StoreDashboard/InvoiceForm'
import Card from "react-bootstrap/Card";
import MedicineForm from '../../components/dashboard/StoreDashboard/MedicineForm'
import InvoiceStyler from './Invoice.css'
import InvoiceTable from '../../components/dashboard/StoreDashboard/InvoiceTable'
import jsPDF from 'jspdf';
import {useHistory} from 'react-router-dom';
import "jspdf-autotable";
function Invoice({addingMedicine}) {
    const history = useHistory();
    const [addMedicine, setAddMedicine] = useState([]);
    const [distributorData, setDistributorData] = useState({});
    const [showUploadDiv, setShowUploadDiv] = useState(false);
    
    const handleMedicineAddition = (medicine) => {
        setAddMedicine([...addMedicine, medicine]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(addMedicine/*, distributorData*/);
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
            // medicineName, rate, price, quantity, batchNo, manufactDate, expiryDate
        addingMedicine(addMedicine[0].medicineName, parseInt(addMedicine[0].MRP),parseInt(addMedicine[0].Price), parseInt(addMedicine[0].quantity), addMedicine[0].batchId, addMedicine[0].ManDate  , addMedicine[0].ExpDate)
        generatePDF(addMedicine,distributorData);
        
        setShowUploadDiv(true);
        history.push('/uploadinvoice');
    };
    const generatePDF = (medicines,invoiceData) => {
        // initialize jsPDF
        const doc = new jsPDF();
      
        // define the columns we want and their titles
        const tableColumn = ["Medicine", "Quantity", "Price", "MRP", "batchId","MfgDate","ExpDate"];
        // define an empty array of rows
        const tableRows = [];
      
        // for each ticket pass all its data into an array
        medicines.forEach(medicine => {
            tableRows.push([
                medicine.medicineName,
                medicine.quantity,
                medicine.Price,
                medicine.MRP,
                medicine.batchId,
                medicine.ManDate,
                medicine.ExpDate
            ]);
        });
        // save the doc
        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        const date = Date().split(" ");
        // we use a date string to generate our filename.
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        // ticket title. and margin-top + margin-left
        doc.text("Medicine Data in this billing.", 14, 15);
        console.log("tableRows",tableRows);
        // we define the name of our PDF file.
        doc.save(`invoice_${dateStr}.pdf`);
    }
    const handleInvoiceData = (data) => {
        setDistributorData(data);
    };
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
                    {!showUploadDiv ?
                    (<div>
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
                   
                    </div>)
                    : 
                    null
                    }

                    </Card>
                </div>
            </div> 
        </div>
    )
}

export default Invoice
