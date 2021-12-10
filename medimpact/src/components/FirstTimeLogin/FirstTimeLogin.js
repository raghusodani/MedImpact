import React,{useState} from 'react'
import Input from '../Input/Input'

function FirstTimeLogin() {
    const [store, setStore] = useState('')
    
    const handleStoreChange = (e) => {
        setStore(e.target.value)
    }
    return (
        <div>
            <Input type="text" placeholder="Store Name" value={store} onChange={handleStoreChange}/>
        </div>
    )
}

export default FirstTimeLogin
