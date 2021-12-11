import React,{useState} from 'react'
import Card from "react-bootstrap/Card";
import Input from '../../Input/Input'
function InvoiceForm() {
    return (
        <div className='invoice-form'>
                <div className='invoice-title'>
                    <h1>Invoice</h1>
                </div>
                <div className='invoice-content'>
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Distributor Name' 
                        style={{
                            width:'70%',
                            margin:'auto',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Bill Number' 
                        style={{
                            width:'70%',
                            margin:'auto',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type='date'
                        className="invoice-input" 
                        placeholder='Bill Date' 
                        style={{
                            width:'70%',
                            margin:'auto',
                            marginTop:'2%'
                        }}
                        onMouseOver={(e)=>{
                            e.currentTarget.type='date'
                        }}
                        onMouseOut={(e)=>{
                            e.currentTarget.type='text'
                            e.currentTarget.placeholder='Bill Date'
                        }}
                        />
                    <Input 
                        type="text"
                        className="invoice-input" 
                        placeholder='Company Name' 
                        style={{
                            width:'70%',
                            margin:'auto',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='Discount' 
                        style={{
                            width:'70%',
                            margin:'auto',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <Input 
                        type="number"
                        className="invoice-input" 
                        placeholder='Total' 
                        style={{
                            width:'70%',
                            margin:'auto',
                            marginTop:'2%'
                        }}>
                    </Input>
                    <div className='invoice-title'>
                        <h1>Invoice Table</h1>
                    </div>
                </div>
        </div>
    )
}

export default InvoiceForm
