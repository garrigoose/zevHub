import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
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
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaSignInAlt, FaSearch } from 'react-icons/fa';
import LoginForm from '../User/LoginForm';
import RegisterForm from '../User/RegisterForm';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  // const [currentUser, setCurrentUser] = useState('User');
  let navigate = useNavigate();
  let currentUser = 'Welcome!';

  const userLogin = useSelector((state) => state.userLogin);
  const state = useSelector((state) => state);
  // console.log(userLogin);

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

  // currentUser = userLogin.userInfo.name;
  // useEffect(() => {
  //   if (userLogin.userInfo.name) {
  //   }
  // }, [userLogin]);

  return (
    <div className='Header'>
      <Navbar
        sticky='top'
        bg='dark'
        variant='dark'
        expand='lg'
        className='sticky-top '
      >
        <Container fluid sticky='top'>
          <LinkContainer to='/'>
            <Navbar.Brand sticky='top' href='#'>
              Z E V H U B
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Container>
              <Nav
                className='me-auto my-2 my-lg-0'
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <LinkContainer to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                {/* sell dropdown */}
                <NavDropdown title='Sell' id='navbarScrollingDropdown'>
                  <LinkContainer to='/sell'>
                    <NavDropdown.Item href='#action3' onClick={navToPost}>
                      Post Item
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item href='#action4'>
                    Manage Items
                  </NavDropdown.Item>
                </NavDropdown>

                {/* shop dropdown */}
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

            {/* right side of nav */}
            <Container className='d-flex justify-content-end'>
              {/* search form */}
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2 border-0'
                  aria-label='Search'
                />
                <Button bg='dark' variant='dark'>
                  <FaSearch />
                </Button>
              </Form>

              {/* user dropdown */}
              {[SplitButton].map((DropdownType, idx) => (
                <DropdownType
                  bg='dark'
                  variant='dark'
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  // size='sm'
                  // variant='btn-primary-outline'
                  title={currentUser}
                  className='m-2 mt-0 mb-0 dropdown-menu-right'
                >
                  {/* login, register, logout, view profile, manage profile */}
                  <NavDropdown.Item
                    href='#action3'
                    onClick={handleShowLogin}
                    className='dropdown-menu-right'
                  >
                    <FaSignInAlt />
                    &nbsp;&nbsp;&nbsp;Login
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='#action4'
                    onClick={handleShowRegister}
                    className='dropdown-menu-right'
                  >
                    <FaUser />
                    &nbsp;&nbsp;&nbsp;Register
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href='#action5'
                    className='dropdown-menu-right'
                  >
                    Manage Profile
                  </NavDropdown.Item>
                </DropdownType>
              ))}
            </Container>
          </Navbar.Collapse>
          {[SplitButton].map((DropdownType, idx) => (
            <DropdownType
              bg='dark'
              variant='dark'
              align='end'
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
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
          <LoginForm handleCloseLogin={handleCloseLogin} />
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
          <RegisterForm handleCloseRegister={handleCloseRegister} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Header;
