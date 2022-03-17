import React from 'react';
import { Card } from 'react-bootstrap';

const MiniProductCard = () => {
  return (
    <div>
      <Card>
        <Card.Img
          variant='top'
          src='https://cdn.shopify.com/s/files/1/0232/5683/products/Had_Carbon_Street_4_2048x2048.jpg?v=1628563362'
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MiniProductCard;
