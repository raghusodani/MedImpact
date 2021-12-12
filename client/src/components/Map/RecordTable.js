import React from 'react'
import './Map.css';

function RecordTable() {
    return (
        <div className='record-table'> 
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Store</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Address</th>
                    <th scope="col">Landmark</th>
                    <th scope="col">City</th>
                    <th scope="col">Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Kishore Medicals</td>
                    <td>Kishore Gaur</td>
                    <td>kishore@kishore.com</td>
                    <td>0123456789</td>
                    <td>E-303, Kishore Tower</td>
                    <td>Kishore Chowk</td>
                    <td>Kishoregarh</td>
                    <td>380059</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default RecordTable
