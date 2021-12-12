import React from 'react'

function MyBills({ list }) {
    console.log(list)
    return (
        <div style={{
            padding: '10px',
        }}>
        <div className="header" style={{
                            color: '#4cccco',
                            fontFamily: 'Source Sans Pro',
                            fontSize: '26px',
                            fontWeight: 'bold',
                        }}>
                            Your Bills
                        </div>
            {list?.map((item, index) => {
                return(
                    <div key={index}>
                        
                        <div className="card" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '10px 0',
                            marginLeft: '20px',
                            height:"50px",
                            width:"95%"
                        }}>
                            <div className="invoice-text" style={{
                                fontFamily: 'Source Sans Pro',
                                fontSize: '22px',
                                marginLeft: '50px',
                                fontWeight: 'bold',
                            }}>
                            Invoice {index + 1}
                            </div>
                            <button className='invoice-button' style={{
                                backgroundColor: '#4cccc0',
                                color: 'white',
                                width: '100px',
                                margin:'0',
                                marginRight: '25px',
                            }} onClick={()=>{window.open(item)}} >View</button>
                    </div>
                    </div>
                )
            }
            )}
            {list ? null : <div style={{
                fontFamily: 'Source Sans Pro',
                fontSize: '20px',
                marginLeft: '50px',
                fontWeight: 'bold',
            }}>
            You have no bills
            </div>}
        </div>
    )
}

export default MyBills
