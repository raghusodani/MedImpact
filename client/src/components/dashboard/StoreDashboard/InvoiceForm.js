import React,{ useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import Input from '../../Input/Input'
function InvoiceForm({ submitInvoice }) {
    const [invoice,setInvoice] = useState({
        distributorName:'',
        billNumber:'',
        billDate:'',
        companyName:'',
        discount:'',
        total:''
    })
    const handleChange = (e) => {
        setInvoice({
            ...invoice,
            [e.target.name]: e.target.value
        })
    }
    const style = {
        width:'70%',
        margin:'auto',
        marginTop:'2%',
        color:'black',
        fontFamily:'Source Sans Pro',
        fontSize:'16px',
    }
    useEffect(()=>{
        console.log(invoice)
    },[invoice])
    
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
                        name={'distributorName'}
                        onChange={handleChange}
                        style={style}>
                    </Input>
                    
                    <Input 
                        type="text"
                        name={'billNumber'}
                        className="invoice-input" 
                        placeholder='Bill Number' 
                        onChange={handleChange}
                        style={style}>
                        
                    </Input>
                    <Input 
                        type='text'
                        nammes={'billDate'}
                        className="invoice-input" 
                        placeholder='Bill Date' 
                        style={style}
                        onChange={ (e) => {
                            setInvoice({
                                ...invoice,
                                billDate:e.target.value
                            })
                        
                        } }
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
                        name={'companyName'}
                        className="invoice-input" 
                        placeholder='Company Name' 
                        onChange={handleChange}
                        style={style}>
                        
                    </Input>
                    <Input 
                        type="number"
                        name={'discount'}
                        className="invoice-input" 
                        placeholder='Discount' 
                        onChange={handleChange}
                        style={style}>
                        
                    </Input>
                    <Input 
                        type="number"
                        name={'total'}
                        className="invoice-input" 
                        placeholder='Total' 
                        onChange={handleChange}
                        style={style}>
                    </Input>
                </div>
        </div>
    )
}

export default InvoiceForm
