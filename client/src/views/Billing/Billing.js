import React, { useState } from 'react'
import './Billing.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
const Billing = () => {
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
    const handleRemoveFields = (id) => {
        // console.log(id);
        setInputFields(inputFields.splice(id, 1));
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
        axios
        .post("", data,
             )
       .then((res) => {
         console.log('api response 🚀', res)
       })
       .catch((error) => {
         console.error(error.response)
       })
       setFormkey(formkey + 1);
       setInputFields([{id: uuidv4()}]);
       setCustomerName('');
       setCustomerContact('');
       setRefferredBy('');
       setBillDate('');
    }
    return (
        <div className='billing'>
            <div className="billingtop">
                <h1 className='billingtoph1'>Billing</h1>
            </div>
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
                                    <option value="String">String</option>
                                    <option value="Alphanumeric">Alphanumeric</option>
                                    <option value="Number">Number</option>
                                    <option value="Date">Date</option>
                                </select>
                                <input
                                    name="medicinequantity"
                                    label="Medicine Quantity"
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                    className = "medicinequantity"  
                                />
                                    <button disabled={inputFields.length === 1} onClick={() => handleRemoveFields(index)} className='removebutton'>
                                        Remove 
                                    </button>
                                    {index === inputFields.length - 1?
                                        <button onClick={handleAddFields} className='addbutton'>
                                            Add
                                        </button>
                                    :null}
                              </div>
                          ))}
                            <h1 className='totalmoney'>Total Amount - 200</h1>
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
