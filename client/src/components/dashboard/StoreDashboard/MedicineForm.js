import React from 'react'
import Card from "react-bootstrap/Card";
import Input from '../../Input/Input'
import { useState } from 'react';


function MedicineForm() {
    const [invoice,setInvoice] = useState({MedName:null,Quantity:null,Price:null,MRP:null,
        BatchId:null,ManDate:null,ExpDate:null});
    return (
        <div className='medicine-form'>
                <div className='invoice-title'>
                    <h1>Invoice Details</h1>
                </div>
                <div className='invoice-content'>
                    <h1 className='invoice-sub-title'>Medicine Details</h1>
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Medicine Name' 
                        name='MedName'
                        value= {invoice.MedName}
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='Quantity'
                        name='Quantity'
                        value={invoice.Quantity} 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='Price per medicine' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='MRP' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <h1 className='invoice-sub-title'>Manufacture Details</h1>
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Batch ID' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type="date"
                        className="invoice-input" 
                        placeholder='Manufacture Date' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type="date"
                        className="invoice-input" 
                        placeholder='Expiry Date' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='invoice-button-container'>
                                <button className='invoice-button' >
                                    Add More
                                </button>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='invoice-button-container'>
                                <button className='invoice-button'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default MedicineForm
