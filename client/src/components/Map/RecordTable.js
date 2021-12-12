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
                    <th scope="col">No</th>
                    <th  scope="col">Store</th>
                    <th  scope="col">Owner</th>
                    <th  scope="col">Email</th>
                    <th  scope="col">Contact</th>
                    <th  scope="col">Address</th>
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
                    <th scope="col">No</th>
                    <th  scope="col">Donor-Name</th>
                    <th  scope="col">Email</th>
                    <th  scope="col">Contact</th> 
                    <th  scope="col">Address</th>
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
