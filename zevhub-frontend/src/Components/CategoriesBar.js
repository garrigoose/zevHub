import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const CategoriesBar = () => {
  return (
    <div>
      <Navbar
        bg='light'
        variant='light'
        className='d-none d-sm-none d-md-none d-lg-block'
      >
        <Container>
          <Navbar.Brand href='#home'>
            The Electric Mobility Marketplace
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/search/cars'>Cars</Nav.Link>
            <Nav.Link href='/search/bikes'>Bikes</Nav.Link>
            <Nav.Link href='/search/scooters'>Scooters</Nav.Link>
            <Nav.Link href='/search/skateboards'>Skateboards</Nav.Link>
            <Nav.Link href='/search/accessories'>Accessories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <br />
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}

      {/* <br />
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
    </div>
  );
};

export default CategoriesBar;
