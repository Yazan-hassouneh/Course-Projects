import React from 'react'
import { Link } from 'react-router-dom'

function Links({title, path}) {
    return (
        <Link to={path} className='d-block px-2 w-50 text-decoration-none text-dark'>{title}</Link>
    )
}

export default Links