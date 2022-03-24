import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
// import Rating from '../components/Rating'
import products from '../products';

import Axios from 'axios';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import { addToCart } from '../actions/User_Actions';
// import { useDispatch } from 'react-redux';

function ProductPage({ match }) {
  const product = products.find((p) => p._id === match.params.id);
  console.log(product);

  return (
    <>
      <Link className='btn' variant='outline-success'>
        Go Back
      </Link>
    </>
  );
}

export default ProductPage;
