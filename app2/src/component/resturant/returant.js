import React from 'react'
import { Link } from 'react-router-dom'

function Resturant() {
    const categories = ["carrot", "broccoli", "onion", "celery", "tomato", "saffron", "pizza", "salad"]

    return (
        <div className='container row h-100 my-2 py-3 m-auto'>
            <h1 className='my-4'>Categories</h1>
            {
                categories.map((item, i) => <div key={i} className='px-3 py-1 col-6'>
                    <Link to={`/ShowDetails?category=${item}`} className='text-bg-light py-2 w-100 d-block text-decoration-none fs-5'>{item}</Link>
                </div>)
            }
        </div>
    )
}

export default Resturant