import React from 'react';
import { useState } from 'react';
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from 'react-bootstrap';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>Z E V H U B</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='#action1'>Home</Nav.Link>
              <Nav.Link href='#action2'>Sell</Nav.Link>

              <Nav.Link href='#' disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
            <NavDropdown title='Hi, User!' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3' onClick={handleShow}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href='#action4' onClick={handleShowRegister}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* login modal */}
      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Register modal */}
      <Modal show={showLogin} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Please Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseRegister}>
            Close
          </Button>
          <Button variant='primary' onClick={handleCloseRegister}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
