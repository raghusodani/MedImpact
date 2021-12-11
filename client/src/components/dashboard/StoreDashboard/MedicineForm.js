import React from 'react'
import Card from "react-bootstrap/Card";
import Input from '../../Input/Input'
import { useState } from 'react';


function MedicineForm({onAddition}) {
    const [invoice,setInvoice] = useState(
        {
            MedName: '',
            Quantity: '',
            Price: '',
            MRP:  '',
            BatchId: '',
            ManDate: '',
            ExpDate: '',
        }
        );
        const [showError,setShowError] = useState(false);
        const [errorMessage,setErrorMessage] = useState('');

        const checkValidity = (invoice) => {
            let isValid = true;
            if(invoice.MedName === '' || invoice.Quantity === '' || invoice.Price === '' || invoice.MRP === '' || invoice.BatchId === '' || invoice.ManDate === '' || invoice.ExpDate === ''){
                isValid = false;
                setErrorMessage('All fields are required');
            }
            return isValid;
        }

    const handleAddition = () => {
        checkValidity(invoice) ? onAddition(invoice) : setShowError(true)
    }

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
                        }}
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                MedName: e.target.value
                            })}
                        } />
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
                        }}
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                Quantity: e.target.value
                            })}
                        } />
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='Price per medicine' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}
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
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                MRP: e.target.value
                            })}
                        } />

                    <h1 className='invoice-sub-title'>Manufacture Details</h1>
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Batch ID' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}
                        onChange={(e) => {
                            setInvoice({
                                ...invoice,
                                BatchId: e.target.value
                            })}
                        } />

                    <Input 
                        type="date"
                        className="invoice-input" 
                        placeholder='Manufacture Date' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}
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
                        type="date"
                        className="invoice-input" 
                        placeholder='Expiry Date' 
                        style={{
                            width:'70%',
                            marginLeft:'20%',
                            marginTop:'2%'
                        }}
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
                                    MedName: '',
                                    Quantity: '',
                                    Price: '',
                                    MRP:  '',
                                    BatchId: '',
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
