import React, { useState } from 'react'
import './Billing.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import TitleInvoice from '../../components/dashboard/StoreDashboard/TitleInvoice';
const Billing = ({purchaseMedicine}) => {
    const [formkey, setFormkey] = useState(2);
    const [amount, setAmount] = useState();
    const [customerName, setCustomerName] = useState('');
    const [customerContact, setCustomerContact] = useState('');
    const [referredBy, setRefferredBy] = useState('');
    const [billDate, setBillDate] = useState('');
    const [inputFields, setInputFields] = useState([{id: uuidv4()}]);
    const handleCustomerName = (e) => {
        setCustomerName(e.target.value);
    }
    const handleCustomerContact = (e) => {
        setCustomerContact(e.target.value);
    }
    const handleReferredBy = (e) => {
        setRefferredBy(e.target.value);
    }
    const handleBillDate = (e) => {
        setBillDate(e.target.value);
    }
    const handleAddFields = () => {
        setInputFields([...inputFields, {id: uuidv4()}])
    }
    const handleRemoveFields = (id,e) => {
        // console.log(id);
        e.preventDefault();
        setInputFields(inputFields.filter(field => field.id !== id));
    }
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
      setInputFields(newInputFields);
    }

    const handleSubmit = (event, customerName, customerContact, referredBy, billDate, inputFields) => {
        event.preventDefault();
        let data = {
            name : customerName,
            contact : customerContact,
            referredBy : referredBy,
            billDate : billDate,
            medicines : inputFields
        }
        console.log(data);
        purchaseMedicine(inputFields[0].medicinequantity,"B101")
        setFormkey(formkey + 1);
        setInputFields([{id: uuidv4()}]);
        setCustomerName('');
        setCustomerContact('');
        setRefferredBy('');
        setBillDate('');
    }
    return (
        <div className='billing'>
            <TitleInvoice text={'Billing'} />
            <div className='billingbottom'>
                <form className='billingform' onSubmit={handleSubmit}>
                    <h1 className='formhead'>Bill 12abc435</h1>
                    <input className ="forminput" type='text' placeholder="Customer Name" value={customerName} onChange={handleCustomerName}/>
                    <input className ="forminput" type='text' placeholder="Customer Contact" value={customerContact} onChange={handleCustomerContact}/>
                    <input className ="forminput" type='text' placeholder="Reffered By" value={referredBy} onChange={handleReferredBy}/>
                    <div className='formlabel'>
                        <label className='label'>Bill Date</label>
                    </div>
                    <input className ="forminput" type='date' placeholder="" value={billDate} onChange={handleBillDate}/>
                    <div className='formlabeldropdown'>
                        <label className='label'>Choose Medicine</label>
                        <label className='label'>Quantity</label>
                    </div>
                    {inputFields.map((inputField , index)=> (
                              <div className="formfields">
                                <select
                                    name="medicinename"
                                    label="Medicine Name"
                                    value={inputFields.medicineName}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                    className='medicinename'
                                >
                                    <option value="none" selected disabled hidden>Select an Option</option>
                                    <option value="String">Penicillin</option>
                                    <option value="Alphanumeric">Cough Syrup</option>
                                    <option value="Number">Pudinhara</option>
                                    <option value="Date">Crocin</option>
                                </select>
                                <input
                                    name="medicinequantity"
                                    label="Medicine Quantity"
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                    className = "medicinequantity"  
                                />
                                    <button disabled={inputFields.length === 1} onClick={(e) => handleRemoveFields(inputField.id,e)} className='removebutton'>
                                        Remove 
                                    </button>
                                    {index === inputFields.length - 1?
                                        <button onClick={handleAddFields} className='addbutton'>
                                            Add
                                        </button>
                                    :null}
                              </div>
                          ))}
                           <button
                            type="submit"
                            className='formsubmit'
                            onClick = {(e) => handleSubmit(e, customerName, customerContact, referredBy, billDate, inputFields)}
                            >
                            Submit
                          </button>
                </form>
            </div>
        </div>
    )
}

export default Billing
