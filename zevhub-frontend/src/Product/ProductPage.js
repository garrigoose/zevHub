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
} from 'react-bootstrap';
import Rating from './Rating';
import products from '../products';

function ProductPage() {
  const { productId } = useParams();
  const product = products[productId];
  console.log(product);

  return (
    <>
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
              <h3>{products.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default ProductPage;
