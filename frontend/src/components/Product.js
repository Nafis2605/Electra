import React from 'react'
import {Card} from "react-bootstrap"
import Rating from "../components/Rating"


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
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </Card.Text>
            
            <Card.Text style={{fontSize:20}}>
                <strong>BDT {product.price}</strong>
            </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product
