import React from 'react'
import '../../Style/Loading.css'

function Loading() {
    return (
        <div className='position-relative w-100 h-100'>
            <div className="lds-dual-ring position-absolute translate-middle top-50 start-50"></div>
        </div>
    )
}

export default Loading