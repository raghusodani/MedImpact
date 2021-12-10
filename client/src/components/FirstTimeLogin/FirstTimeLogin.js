import axios from 'axios'
import React,{useState} from 'react'
import { getToken } from '../../helpers/LocalStorageValidator'
import Input from '../Input/Input'
import { useHistory } from 'react-router-dom'
function FirstTimeLogin() {
    // landmark, city, address, pincode
    const history = useHistory();
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
    const handleSubmit = (e) => {
        const payload = {
            store,
            owner,
            phone,
            landmark,
            city,
            address,
            pincode
        }
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
                history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })

    }   

    return (
        <div className='card border rounded ' 
            style={{
                width: '50%',
                margin: '40px auto ',
            }}
        >
            <Input type="text" placeholder="Store Name" value={store} onChange={handleStoreChange}/>
            <Input type="text" placeholder="Owner Name" value={owner} onChange={handleOwnerChange}/>
            <Input type="text" placeholder="Phone Number" value={phone} onChange={handlePhoneChange}/>
            <Input type="text" placeholder="Landmark" value={landmark} onChange={handleLandmarkChange}/>
            <Input type="text" placeholder="Address" value={address} onChange={handleAddressChange}/>
            <Input type="text" placeholder="City" value={city} onChange={handleCityChange}/>
            <Input type="text" placeholder="Pincode" value={pincode} onChange={handlePincodeChange}/>
            <button className='btn btn-primary' 
                style={{
                    width: '100%',
                    marginTop: '20px'
                }}
                onClick={handleSubmit}
            >
                Save
            </button>
        </div>
    )
}

export default FirstTimeLogin
