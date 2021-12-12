import React from 'react'

function ExpiryTable() {
    return (
        <div className="expiry-table">
            <table class="table" style={{
                color: 'black',
                backgroundColor: '#4CCCC0',
                marginBottom: '0px',
                fontFamily: 'source sans pro',
            }}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Medicine</th>
                    <th scope="col">Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Crocin</td>
                    <td>1/1/2022</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Vicks Inhaler</td>
                    <td>2/5/2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExpiryTable
