import React from 'react'

function Products() {
    const imgArr = ["./h.jpg", "./logo512.png", "./logo512.png", "./logo512.png", "./logo512.png"]
    return (
        <div className='row container m-auto py-5 my-2 justify-content-center'>
            {imgArr.map((item, index) => 
            <div className='col-12 col-md-6 col-lg-4 my-3' key={index}>
                <div className="card" style={{width: '18rem'}}>
                    <img src={item} className="card-img-top" alt="Product Name" />
                    <div className="card-body">
                        <h5 className="card-title">Product one</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Show More</a>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Products