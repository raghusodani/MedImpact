import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Map.css';
import { type } from 'os';

function RecordTable(props) {

const [data, setData] = useState([]);

useEffect(()=>{
setData(props.data);

},[props.data])



    return (
        <div className='record-table'> 
           
                {props.type === "medicine" ? (
                    <table class="table">
                    <thead class="thead-light">
                <tr>
                    <th width="1%" scope="col">No</th>
                    <th width="10%" scope="col">Store</th>
                    <th width="10%" scope="col">Owner</th>
                    <th width="10%" scope="col">Email</th>
                    <th width="10%" scope="col">Contact</th>
                    <th width="10%" scope="col">Address</th>
                    <th width="10%" scope="col">Landmark</th>
                    <th width="10%" scope="col">City</th>
                    <th width="5%" scope="col">Pincode</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((d, id)=>{
                        return (
                            <tr>
                    <th scope="row">{id+1}</th>
                    <td>{d.storeName}</td>
                    <td>{d.storeOwner}</td>
                    <td>{d.email}</td>
                    <td>{d.contact}</td>
                    <td>{d.address}</td>
                    <td>{d.landmark}</td>
                    <td>{d.city}</td>
                    <td>{d.pincode}</td>
                    </tr>    
                        )
                    })
                }
                   
                </tbody>
                </table>
                ): (
                    <table class="table">
                    <thead class="thead-light">
                <tr>
                    <th width="1%" scope="col">No</th>
                    <th width="10%" scope="col">Donor-Name</th>
                    <th width="10%" scope="col">Email</th>
                    <th width="10%" scope="col">Contact</th> 
                    <th width="10%" scope="col">Address</th>
                    <th width="10%" scope="col">Landmark</th>
                    <th width="10%" scope="col">City</th>
                    <th width="5%" scope="col">Pincode</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((d, id)=>{
                        return (
                            <tr>
                    <th scope="row">{id+1}</th>
                    <td>{d.donorName}</td>
                    <td>{d.email}</td>
                    <td>{d.contact}</td>
                    <td>{d.address}</td>
                    <td>{d.landmark}</td>
                    <td>{d.city}</td>
                    <td>{d.pincode}</td>
                    </tr>    
                        )
                    })
                }
                   
                </tbody>
                </table>
                )}
                   
        </div>
    )
}

export default RecordTable
