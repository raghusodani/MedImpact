import React from 'react'

function InventoryTable() {
    return (
        <div className="inventory-table">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Serial No.</th>
                    <th scope="col">Medicine</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Vicks</td>
                    <td>Rs.10</td>
                    <td>2000</td>
                    <td>1/1/2022</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Dolo</td>
                    <td>Rs.20</td>
                    <td>1000</td>
                    <td>1/1/2022</td>
                    </tr>
                </tbody>
                </table>

                
        </div>
    )
}

export default InventoryTable
