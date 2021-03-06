import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {Row, Col,Image, ListGroup, Card, Button } from "react-bootstrap"
import axios from "axios"
import Rating from "../components/Rating"

const ProductScreen = ({match}) => {
    //const product = products.find((p) => p._id === match.params.id)
    const [product, setProduct] = useState({})

    useEffect(()=>{
        const fetchProduct=async()=>{
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[match])
    return (
        <>
            <Link className='btn btn-dark rounded' to='/'> Go Back </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image } alt={product.name} fluid/>
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4> BDT {product.price}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <h4>BDT</h4>
                                </Col>
                                <Col>
                                    <h4>{product.price}</h4>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'Available':'Not available'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block btn-dark rounded' type='button' disabled={product.countInStock === 0}>
                                Add to cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
