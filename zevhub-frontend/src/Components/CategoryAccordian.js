import React from 'react';
import { Row, Accordion } from 'react-bootstrap';
import MiniProductCard from './MiniProductCard';

const CategoryAccordian = () => {
  return (
    <div className='pt-5'>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Category #1</Accordion.Header>
          <Accordion.Body>
            <Row xs={1} md={4} className='g-4'>
              {Array.from({ length: 4 }).map((_, idx) => (
                <MiniProductCard key={idx} />
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Category #2</Accordion.Header>
          <Accordion.Body>
            <Row xs={1} md={4} className='g-4'>
              {Array.from({ length: 4 }).map((_, idx) => (
                <MiniProductCard key={idx} />
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Category #3</Accordion.Header>
          <Accordion.Body>
            <Row xs={1} md={4} className='g-4'>
              {Array.from({ length: 4 }).map((_, idx) => (
                <MiniProductCard key={idx} />
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Category #4</Accordion.Header>
          <Accordion.Body>
            <Row xs={1} md={4} className='g-4'>
              {Array.from({ length: 4 }).map((_, idx) => (
                <MiniProductCard key={idx} />
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header>Category #5</Accordion.Header>
          <Accordion.Body>
            <Row xs={1} md={4} className='g-4'>
              {Array.from({ length: 4 }).map((_, idx) => (
                <MiniProductCard key={idx} />
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CategoryAccordian;
