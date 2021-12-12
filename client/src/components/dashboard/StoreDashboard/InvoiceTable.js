import React from 'react'

function InvoiceTable({ list }) {

    return (
        <div className="invoice-table">
        <div className='invoice-title'>
            Invoice Table
        </div>
            <table class="table" style={{
                backgroundColor: '#4cccc0',
                borderRadius: '15px',
            }}>
                <thead class="thead-dark" style={{
                    fontFamily: 'Source Sans Pro',
                    fontSize: '21px',
                }}>
                    <tr>
                        <th scope="col">Batch ID</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">MRP</th>
                    </tr>
                </thead>
                <tbody style={{
                    fontFamily: 'Source Sans Pro',
                    fontSize: '17px',
                }}>
                    {/* <tr>
                    <th scope="row">B101</th>
                    <td>Vicks</td>
                    <td>x200</td>
                    <td>Rs.25</td>
                    </tr> */}
                    {list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{item.batchId}</th>
                                <td>{item.medicineName}</td>
                                <td>{item.quantity}</td>
                                <td>{item.MRP}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
                </table>
        </div>
    )
}

export default InvoiceTable
