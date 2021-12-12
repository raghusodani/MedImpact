import React from 'react'

function OutOfStockTable() {
    return (
        <div className="out-of-stock-table">
            <table class="table" style={{
                color: 'black',
                backgroundColor: '#4CCCC0',
                marginBottom: '0px',
                fontFamily: 'source sans pro',
            }}>
                <thead >
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Out Of Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Aspirin</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Paracetamol</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OutOfStockTable
