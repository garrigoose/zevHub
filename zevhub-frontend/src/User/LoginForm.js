import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/User_Actions';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, Checkbox } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem('rememberMe') ? true : false;
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return <div></div>;
};

export default LoginForm;
