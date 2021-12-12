import React, { useEffect } from 'react'
import Card from "react-bootstrap/Card";
import Input from '../../Input/Input'
import { useState } from 'react';


function MedicineForm({onAddition}) {
    const [invoice,setInvoice] = useState(
        {
            medicineName: '',
            quantity: '',
            Price: null,
            MRP:  null,
            batchId: '',
            ManDate: null,
            ExpDate: null,
        }
        );
        const [showError,setShowError] = useState(false);
        const [errorMessage,setErrorMessage] = useState('');
        const style = {
            width:'70%',
            marginLeft:'15%',
            marginTop:'2%',
            color:'black',
            fontFamily:'Source Sans Pro',
            fontSize:'16px',
        }
        const checkValidity = (invoice) => {
            let isValid = true;
            if(invoice.medicineName === '' || invoice.quantity === '' || invoice.Price === '' || invoice.MRP === '' || invoice.batchId === '' || invoice.ManDate === '' || invoice.ExpDate === ''){
                isValid = false;
                setErrorMessage('All fields are required');
            }
            return isValid;
        }

    const handleAddition = () => {
        if(checkValidity(invoice)){
            onAddition(invoice) 
            setInvoice({
                medicineName: '',
                quantity: '',
                Price: null,
                MRP:  null,
                batchId: '',
                ManDate: null,
                ExpDate: null,
            })
    }
    else{
        setShowError(true);
    }
    }

    return (
        <div className='medicine-form'>
                <div className='invoice-title'>
                    <h1>Invoice Details</h1>
                </div>
                <div className='invoice-content'>
                    <h1 className='invoice-sub-title' >Medicine Details</h1>
                    <div className='invoice-medicine-details'>
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Medicine Name' 
                        name='medicineName'
                        value= {invoice.medicineName}
                        style={ style }
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                medicineName: e.target.value
                            })}
                        } />
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='Quantity'
                        name='Quantity'
                        value={invoice.quantity} 
                        style={ style }
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                quantity: e.target.value
                            })}
                        } />
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='Price per medicine' 
                        style={style}
                        onChange={(e) => {
                            setInvoice({    
                                ...invoice,
                                Price: e.target.value
                            })}
                        } />
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='MRP' 
                        style={style}
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                MRP: e.target.value
                            })}
                        } />
                    </div>
                    <h1 className='invoice-sub-title'>Manufacture Details</h1>
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Batch ID' 
                        style={style}
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                batchId: e.target.value
                            })}
                        } />

                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Manufacture Date' 
                        style={style}
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                ManDate: e.target.value
                            })}
                        }
                        onMouseOver={(e) => {
                            e.currentTarget.type = 'date'
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.type = 'text'
                            e.currentTarget.placeholder = 'Manufacture Date'
                        }}
                         />
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Expiry Date' 
                        style={style}
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                ExpDate: e.target.value
                            })}
                        } 
                        onMouseOver={(e) => {
                            e.currentTarget.type = 'date'
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.type = 'text'
                            e.currentTarget.placeholder = 'Expiry Date'
                        }}

                        />
                        {/* show error if showerror is true */}
                        {showError && <div className='text-red-600 text-sm font-medium pt-2'>*{errorMessage}</div>}
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='invoice-button-container'>
                                <button className='invoice-button' onClick={handleAddition} >
                                    Add More
                                </button>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='invoice-button-container'>
                                <button className='invoice-button' onClick={()=>{setInvoice({
                                    medicineName: '',
                                    quantity: '',
                                    Price: '',
                                    MRP:  '',
                                    batchId: '',
                                    ManDate: '',
                                    ExpDate: '',
                                })}}>
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
