import React from 'react'

function Error({error}) {
    return (
        <small className='text-danger text-start fw-bold w-100 d-block'>{error}</small>
    )
}

export default Error