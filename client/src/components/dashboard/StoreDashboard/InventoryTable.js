import React, { useState, useEffect } from 'react';

function InventoryTable({medicines}) {
    return (
        <div className="inventory-table">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Batch No.</th>
                    <th scope="col">Medicine</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                
                    <tr>
                    <th scope="row">{1}</th>
                    <td>{medicines?.name}</td>
                    <td>{medicines?.price}</td>
                    <td>{medicines?.quantity}</td>
                    <td>{medicines?.expiryDate}</td>
                    </tr>
                   
                </tbody>
                </table>

                
        </div>
    )
}

export default InventoryTable
