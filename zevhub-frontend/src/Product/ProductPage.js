import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from 'react-bootstrap';
import Rating from './Rating';
import axios from 'axios';

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/products/${productId}`);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Link className='btn' variant='outline-success' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            </ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                className='btn-block'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
