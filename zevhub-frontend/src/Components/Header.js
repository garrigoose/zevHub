import '../App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [keyword, setKeyword] = useState('');
  // const [currentUser, setCurrentUser] = useState('User');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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

  const submitHandler = (e) => {
    console.log(keyword);
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  // userInfo.name = userLogin.userInfo.name;
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
                      Manage Items
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item href='#action4'>
                    Manage Sales
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
              <Form onSubmit={submitHandler} className='search-form'>
                <Form.Control
                  type='text'
                  name='q'
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder='Search Products...'
                  className='mr-sm-2 ml-sm-5 mr-1'
                ></Form.Control>
                <Button
                  type='submit'
                  variant='outline-primary'
                  className='p-2 ml-1'
                >
                  Search
                </Button>
              </Form>

              {/* user dropdown */}
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id='username'
                  bg='dark'
                  variant='dark'
                >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title={'Welcome!'}
                  id='username'
                  bg='dark'
                  variant='dark'
                >
                  <NavDropdown.Item
                    href='#action3'
                    onClick={handleShowLogin}
                    className='dropdown-menu-right'
                    bg='dark'
                    variant='dark'
                  >
                    <FaSignInAlt />
                    &nbsp;Login
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='#action3'
                    onClick={handleShowRegister}
                    className='dropdown-menu-right'
                    bg='dark'
                    variant='dark'
                  >
                    <FaSignInAlt />
                    &nbsp;Register
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Container>
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Navbar.Collapse>
          {/* cart navigation */}
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
              <NavDropdown.Item href='#action4'>Cart Item #2</NavDropdown.Item>
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
