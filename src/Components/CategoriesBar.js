import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            <Link to='/categories/Cars'>
              <Nav.Link href='/categories/cars'>Cars</Nav.Link>
            </Link>
            <Link to='/categories/Bikes'>
              <Nav.Link href='/categories/bikes'>Bikes</Nav.Link>
            </Link>
            <Link to='/categories/Scooters'>
              <Nav.Link href='/categories/scooters'>Scooters</Nav.Link>
            </Link>
            <Link to='/categories/Skateboards'>
              <Nav.Link href='/categories/skateboards'>Skateboards</Nav.Link>
            </Link>
            <Link to='/categories/Accessories'>
              <Nav.Link href='/categories/accessories'>Accessories</Nav.Link>
            </Link>
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
