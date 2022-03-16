import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <div>
      <Card>
        <Card.Img
          variant='top'
          src='https://electricbike.com/forum/filedata/fetch?photoid=127544'
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
