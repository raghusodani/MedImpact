import React,{useState} from 'react'
import Input from '../Input/Input'

function FirstTimeLogin() {
    // landmark, city, address, pincode
    const [store, setStore] = useState('')
    const [owner, setOwner] = useState('')
    const [phone, setPhone] = useState('')
    const [landmark, setLandmark] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const handleStoreChange = (e) => {
        setStore(e.target.value)
    }
    const handleOwnerChange = (e) => {
        setOwner(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
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
        setPincode(e.target.value)
    }
    
    return (
        <div>
            <Input type="text" placeholder="Store Name" value={store} onChange={handleStoreChange}/>
            <Input type="text" placeholder="Owner Name" value={owner} onChange={handleOwnerChange}/>
            <Input type="number" placeholder="Phone Number" value={phone} onChange={handlePhoneChange}/>
            <Input type="text" placeholder="Landmark" value={landmark} onChange={handleLandmarkChange}/>
            <Input type="text" placeholder="Address" value={address} onChange={handleAddressChange}/>
            <Input type="text" placeholder="City" value={city} onChange={handleCityChange}/>
            <Input type="number" placeholder="Pincode" value={pincode} onChange={handlePincodeChange}/>
        </div>
    )
}

export default FirstTimeLogin
