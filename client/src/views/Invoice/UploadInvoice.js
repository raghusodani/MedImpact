import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

function UploadInvoice({retrieveFile,handleUploadInvoice}) {
    const history = useHistory();
    const [pdf, setPdf] = useState(null);
    return (
        <div>
            <div className='invoice-upload-container'>
                            <div className='invoice-upload-text'>
                                 Upload the PDF file Downloaded in your browser
                            </div>
                            <div className='invoice-upload-btn'>
                                        <input type='file' id='file' name='file' onChange={retrieveFile} style={{
                                    width: '100%',
                                    height: '200px',
                                }}/>
                            </div>
                                    <button className='invoice-submit-btn' onClick={(e)=>{
                                        handleUploadInvoice(e)
                                        history.push('/invoice')
                                        }}>Submit</button>
                        </div>
        </div>
    )
}

export default UploadInvoice

