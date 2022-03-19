import React from 'react';
import { Card, CardGroup, Col, Row, Container } from 'react-bootstrap';
import ProductCard from '../Product/ProductCard';

const HomePageCards = () => {
  return (
    <div className='pt-5'>
      <Container>
        <CardGroup className='gap-4'>
          <Row xs={1} sm={2} md={4} className='g-4'>
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col key={idx}>
                <ProductCard />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default HomePageCards;
