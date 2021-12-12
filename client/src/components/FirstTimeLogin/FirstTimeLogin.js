import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { getToken, getType } from '../../helpers/LocalStorageValidator'
import Input from '../Input/Input'
import { useHistory } from 'react-router-dom'
function FirstTimeLogin({setup, addMedicalStore}) {
    // landmark, city, address, pincode
    const type = getType();
    const history = useHistory();
    const [storeName, setStore] = useState('')
    const [ownerName, setOwner] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [landmark, setLandmark] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)
    const validBloodGroupRegex = /^(A|B|AB|O)[+-]$/i;
    const handleStoreChange = (e) => {
        setStore(e.target.value)
    }
    const handleOwnerChange = (e) => {
        setOwner(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value.replace(/[^0-9]/g, ''))
    }
    const handleLandmarkChange = (e) => {
        setLandmark(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const handlePincodeChange = (e) => {
        setPincode(e.target.value.replace(/[^0-9]/g, ''))
    }
    const handleBloodGroupChange = (e) => {
        // set with blood group regex
        setBloodGroup(e.target.value)
    }
    const Validite = (data) => {
        if(type==="Store" &&  data.storeName === ''){
            setError('Store Name is required')
            return false
        }
        if(type==="Store" && data.ownerName === ''){
            setError('Owner Name is required')
            return false
        }
        if(type==="Donor" &&  data.name === ''){
            setError('Name is required')
            return false
        }
        if(data.phone === '' || data.phone.length !== 10){
            setError('Enter a valid phone number')
            return false
        }
        if(data.landmark === ''){
            setError('Landmark is required')
            return false
        }
        if(data.city === ''){
            setError('City is required')
            return false
        }
        if(data.address === ''){
            setError('Address is required')
            return false
        }
        if(data.pincode === ''){
            setError('Pincode is required')
            return false
        }
        if(type==="Donor" && validBloodGroupRegex.test(data.bloodGroup) === false){
            setError('Enter Correct Blood Group')
            return false
        }
        return true
    }



    const handleSubmit = (e) => {
        const payload = type === 'Store' ? {
            storeName,
            ownerName,
            phone,
            landmark,
            city,
            address,
            pincode
        } :
        {
            name,
            phone,
            landmark,
            city,
            address,
            pincode
        }
        Validite(payload) ? 
        axios.post('https://medimpact.herokuapp.com/auth/addDetails',payload, {
            headers: {
                Authorization : getToken()
            }
            })
            .then(res => {
                console.log(res)
                if(res.data.success){
                    alert('Details added successfully')
                }
                history.push(`dashboard/${type}`)
            })
            .catch(err => {
                console.log(err)
            })
            : setShowError(true)

            addMedicalStore(ownerName, storeName, phone, address)

    }   

    return (
        <div className='card border rounded ' 
            style={{
                width: '50%',
                margin: '40px auto ',
            }}
        >
            
    {   type==="Store" 
        ?  
        <div>
        <Input type="text" placeholder="Owner Name" value={ownerName} onChange={handleOwnerChange}/>
        <Input type="text" placeholder="Store Name" value={storeName} onChange={handleStoreChange}/>
        </div>
        :
        <div>
        <Input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
        <Input type="text" placeholder="Blood Group" value={bloodGroup} onChange={handleBloodGroupChange}/>
        </div>
        }
            <Input type="number" placeholder="Phone Number" value={phone} onChange={handlePhoneChange}/>
            <Input type="text" placeholder="Landmark" value={landmark} onChange={handleLandmarkChange}/>
            <Input type="text" placeholder="Address" value={address} onChange={handleAddressChange}/>
            <Input type="text" placeholder="City" value={city} onChange={handleCityChange}/>
            <Input type="text" placeholder="Pincode" value={pincode} onChange={handlePincodeChange}/>
            {/* show error */}
            {showError && <div className='text-red-600 text-sm font-medium pt-2'>*{error}</div>}
            <button className='btn' 
                style={{
                    width: '100%',
                    marginTop: '20px',
                    backgroundColor: '#4CCCC0',
                }}
                onClick={handleSubmit}
            >
                Save
            </button>
        </div>
    )
}

export default FirstTimeLogin
