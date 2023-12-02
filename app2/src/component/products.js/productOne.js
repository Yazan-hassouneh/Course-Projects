import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductOne() {
    const [products, setProducts] = useState([])
    const getData = async () => {
        let respons = await fetch("https://fakestoreapi.com/products")
        let data = await respons.json()
        setProducts(data)
    }
    useEffect(() => {
        getData()
    })
    console.log(2)
    return (    
        <div className='container row py-5 m-auto'>
            {
                products.map((item) => <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3 my-1'>
                        <Card className='w-100 h-100 p-2'>
                            <Card.Img variant="top" src={item.image}/>
                            <Card.Body >
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text className='fw-bold fs-5'>Price: {item.price} $</Card.Text>
                                <Card.Text>Category: {item.category}</Card.Text>
                                <Button variant="success">Show More</Button>
                            </Card.Body>
                        </Card>
                </div>)
            }
        </div>
    )
}

export default ProductOne