import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../Components/Spinner';

const RegisterForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3'>
          <Form.Control
            id='name'
            placeholder='Enter your name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            id='email'
            placeholder='Enter your email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            id='password'
            placeholder='Enter your password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            id='confirmPassword'
            placeholder='Confirm password'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check
                      type='checkbox'
                      id='rememberMe'
                      onChange={handleRememberMe}
                      checked={rememberMe}
                      label='Remember Me'
                    ></Form.Check>
                  </Form.Group> */}
        <div>
          <Button
            type='submit'
            variant='outline-success'
            className='login-form-button'
            style={{ minWidth: '100%' }}
          >
            Register
          </Button>
        </div>
      </Form>
    </>
  );
};

export default RegisterForm;
