import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
  SplitButton,
  ButtonGroup,
} from 'react-bootstrap';
import { Cart2 } from 'react-bootstrap-icons';
import LoginForm from '../User/LoginForm';
import RegisterForm from '../User/RegisterForm';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState('User');
  let navigate = useNavigate();

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  function navToCart() {
    navigate('/cart');
  }

  function navToPost() {
    navigate('/upload');
  }

  return (
    <div className='Header'>
      <Navbar sticky='top' bg='light' expand='lg' className='sticky-top '>
        <Container fluid sticky='top'>
          <Navbar.Brand sticky='top' href='#'>
            Z E V H U B
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Container>
              <Nav
                className='me-auto my-2 my-lg-0'
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href='/'>Home</Nav.Link>

                <NavDropdown title='Sell' id='navbarScrollingDropdown'>
                  <NavDropdown.Item href='#action3' onClick={navToPost}>
                    Post Item
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    Manage Items
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Shop' id='navbarScrollingDropdown'>
                  <NavDropdown.Item href='#action3'>All</NavDropdown.Item>
                  <NavDropdown.Item href='#action3'>Cars</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>Bikes</NavDropdown.Item>
                  <NavDropdown.Item href='#action5'>Scooters</NavDropdown.Item>
                  <NavDropdown.Item href='#action6'>
                    Skateboards
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action7'>
                    Accessories
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
            <Container className='justify-content-end'>
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
                {[SplitButton].map((DropdownType, idx) => (
                  <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    // size='sm'
                    variant='outline-success'
                    title={currentUser}
                    className='m-2 mt-0 mb-0'
                  >
                    <NavDropdown.Item href='#action3' onClick={handleShowLogin}>
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href='#action4'
                      onClick={handleShowRegister}
                    >
                      Register
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action5'>
                      Manage Profile
                    </NavDropdown.Item>
                  </DropdownType>
                ))}
              </Form>
            </Container>
          </Navbar.Collapse>
          {[SplitButton].map((DropdownType, idx) => (
            <DropdownType
              align='end'
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              // size='sm'
              variant='outline-success'
              title={<Cart2 />}
              className='m-2 mt-0 mb-0 dropdown-menu-right'
              onClick={navToCart}
            >
              <NavDropdown.Item
                href='#action3'
                onClick={handleShowLogin}
                className=' dropdown-menu-right'
              >
                Cart Item #1
              </NavDropdown.Item>
              <NavDropdown.Item href='#action4' onClick={handleShowRegister}>
                Cart Item #2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>Checkout</NavDropdown.Item>
            </DropdownType>
          ))}
        </Container>
      </Navbar>

      {/* login modal */}
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
          {/* <TestForm /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-success' onClick={handleCloseLogin}>
            Close
          </Button>
          <Button variant='outline-success' onClick={handleCloseLogin}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Register modal */}
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Please Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-success' onClick={handleCloseRegister}>
            Close
          </Button>
          <Button variant='outline-success' onClick={handleCloseRegister}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
