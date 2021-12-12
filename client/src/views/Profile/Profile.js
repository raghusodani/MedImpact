import React,{ useState, useEffect } from 'react'
import MyBills from './MyBills'
import MyInvoices from './MyInvoices'
function Profile({getBills,getInvoices}) {
    const [invoices, setInvoices] = useState()
    const [bills, setBills] = useState([])
    useEffect(() => {
        getBills()?.then(res => {
            console.log("getbills",res)
            setBills([res])
        })
        getInvoices()?.then(res => {
            console.log("getinvoices",res)
            setInvoices([res])
        })
    }, [])
    return (
        <div>
            <MyInvoices list={invoices} />
            <MyBills  bills={bills} />
        </div>
    )
}

export default Profile
