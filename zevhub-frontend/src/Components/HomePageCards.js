import React from 'react';
import { Card, CardGroup, Col, Row, Container } from 'react-bootstrap';
import ProductCard from '../Product/ProductCard';
import products from '../products';

const HomePageCards = () => {
  return (
    <div className='pt-5'>
      <Container>
        <CardGroup className='gap-4'>
          <Row xs={1} sm={2} md={4} className='g-4'>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default HomePageCards;
