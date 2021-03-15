import React from 'react'
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import Rating from "../components/Rating"


const Product = ({product}) => {
    return (
        <Card className= 'my-3 p-3 rounded' style={{backgroundColor:"#FCFCFC"}}>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <h4>{product.name}</h4>
                </Card.Title>
            </Link>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </Card.Text>
            
            <Card.Text>
                <strong>BDT {product.price}</strong>
            </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product
