import React from 'react'

function InvoiceTable() {
    return (
        <div className="invoice-table">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Batch ID</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">MRP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">B101</th>
                    <td>Vicks</td>
                    <td>x200</td>
                    <td>Rs.25</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default InvoiceTable
