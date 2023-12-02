import React from 'react'

function Footer() {
    return (
        <div className='bg-body-secondary'>
            <footer className='container'>
                <div className='row'>
                    <ul className='list-group list-unstyled col-12 col-md-4 my-2 text-start'>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Products</li>
                        <li>More</li>
                    </ul>
                    <ul className='list-group list-unstyled col-12 col-md-4 my-2 text-start'>
                        <li>Address : ... ... .. </li>
                        <li>Email : email@gmail.com</li>
                        <li>Phone : 0828199372</li>
                        <li>City : Londen</li>
                    </ul>
                    <div className='col-12 col-md-4 my-2 text-start '>
                        <p>
                        A 1985 ruling by the U.S. Federal Communications Commission released parts of the ISM bands for unlicensed use for communications.[9] These frequency bands include the same 2.4 GHz bands used by equipment such as microwave ovens, and are thus subject to interference
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer