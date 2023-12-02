import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';

function ShowDetails() {
    const [products, setproducts] = useState([])
    const getCategories = async () => {
        let category = new URLSearchParams(window.location.search).get("category")
        let request = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${category}`)
        let data = await request.json()
        setproducts(data.recipes)
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div className='container my-4 py-3 row m-auto'>
            {
                products.map((item) => <div key={item.recipe_id} className='col-12 col-md-4 mb-3'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image_url} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                </div>)
            }
        </div>
    )
}

export default ShowDetails