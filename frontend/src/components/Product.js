import React from 'react'
import {Card} from "react-bootstrap"


const Product = ({product}) => {
    return (
        <Card className= 'my-3 p-3 rounded' style={{backgroundColor:"#FCFCFC"}}>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </a>
            <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <h4>{product.name}</h4>
                </Card.Title>
            </a>
            <Card.Text as='div'>
                <div className='my-3'>
                {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>
            <Card.Text>
                <h5>BDT {product.price}</h5>
            </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product
