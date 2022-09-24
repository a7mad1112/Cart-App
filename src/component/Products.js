import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/slices/cart-slice';
import { fetchProducts } from '../rtk/slices/products-slice';
function Products () {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    console.log(products);
    return (
        <Container className='py-5'>
            <Row className='mt-3 py-5'>
                {
                    products.map(prod => (
                        <Col className='mb-5' key={prod.id}>
                            <Card style={{ width: '18rem', height: '100%' }}>
                                <Card.Img style={{height: '300px'}} variant="top" src={prod.image} />
                                <Card.Body>
                                    <Card.Title>{ prod.title }</Card.Title>
                                    <Card.Text>
                                        { prod.description.slice(0, 60) }...
                                    </Card.Text>
                                    <Card.Text className='bg-danger py-2 text-center text-light fw-bold'>
                                        ${ prod.price }
                                    </Card.Text>
                                    <Button className='w-100' variant="primary" onClick={() => dispatch(addToCart(prod))} >Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
};
export default Products;
