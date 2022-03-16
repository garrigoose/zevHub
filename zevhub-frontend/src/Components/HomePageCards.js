import React from 'react';
import { Card, CardGroup, Col, Row, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

const HomePageCards = () => {
  return (
    <div>
      <Container>
        <CardGroup className='gap-4'>
          <Row xs={1} md={4} className='g-4'>
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col>
                <ProductCard />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
      {/* <h1> BREAK </h1>
      <Row xs={1} md={2} className='g-4'>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant='top' src='holder.js/100px160' />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default HomePageCards;
