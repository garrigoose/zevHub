import React from 'react';
import {
  Container,
  CardGroup,
  Row,
  Col,
  DropdownButton,
  DropdownType,
  ButtonGroup,
  Dropdown,
} from 'react-bootstrap';
import ProductCard from './ProductCard';

const ResultsView = () => {
  return (
    <div>
      <Container className='m-2 d-flex flex-row-reverse'>
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size='sm'
            variant='outline-success'
            title='Results Per Page'
          >
            <Dropdown.Item eventKey='1'>24</Dropdown.Item>
            <Dropdown.Item eventKey='2'>48</Dropdown.Item>
            <Dropdown.Item eventKey='3'>96</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='4'>All</Dropdown.Item>
          </DropdownType>
        ))}
      </Container>
      <Container>
        <CardGroup className='gap-4'>
          <Row xs={1} sm={2} md={4} lg={6} xl={8} className='g-4'>
            {Array.from({ length: 25 }).map((_, idx) => (
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

export default ResultsView;
