import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/User_Actions';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = (props) => {
  //   const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem('rememberMe') ? true : false;
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  const initialEmail = localStorage.getItem('rememberMe')
    ? localStorage.getItem('rememberMe')
    : '';

  return (
    <div>
      <Formik
        initialValues={{
          email: initialEmail,
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: new Yup.StringSchema()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            let dataToSubmit = {
              email: values.email,
              password: values.password,
            };

            // dispatch(loginUser(dataToSubmit))
            //   .then((response) => {
            //     if (response.payload.loginSuccess) {
            //       window.localStorage.setItem(
            //         'userId',
            //         response.payload.userId
            //       );
            //       if (rememberMe === true) {
            //         window.localStorage.setItem('rememberMe', values.id);
            //       } else {
            //         localStorage.removeItem('rememberMe');
            //       }
            //       props.history.push('/');
            //     } else {
            //       setFormErrorMessage('Email or Password Invalid');
            //     }
            //   })
            //   .catch((err) => {
            //     setFormErrorMessage('Email or Password Invalid');
            //     setTimeout(() => {
            //       setFormErrorMessage('');
            //     }, 3000);
            //   });
            // setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <div className='app'>
              <form onSubmit={handleSubmit}>
                <Form required>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      id='email'
                      placeholder='Enter your email'
                      type='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control
                      id='password'
                      placeholder='Enter your password'
                      type='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control
                      id='password'
                      placeholder='Enter your password again'
                      type='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check
                      type='checkbox'
                      id='rememberMe'
                      onChange={handleRememberMe}
                      checked={rememberMe}
                      label='Remember Me'
                    ></Form.Check>
                  </Form.Group>
                  <div>
                    <Button
                      type='primary'
                      variant='outline-success'
                      htmlType='submit'
                      className='login-form-button'
                      style={{ minWidth: '100%' }}
                      disabled={isSubmitting}
                      onSubmit={handleSubmit}
                    >
                      Register
                    </Button>
                  </div>
                </Form>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
