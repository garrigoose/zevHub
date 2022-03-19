import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import { addToCart } from '../actions/User_Actions';
// import { useDispatch } from 'react-redux';
import Image from 'react-bootstrap/Image';

function ProductPage(props) {
  //   const dispatch = useDispatch();
  //   const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  //   useEffect(() => {
  //     Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
  //       (response) => {
  //         setProduct(response.data[0]);
  //       }
  //     );
  //   }, []);

  //   const addToCartHandler = (productId) => {
  //     dispatch(addToCart(productId));
  //   };

  return (
    <div className='postPage' style={{ width: '100%', padding: '3rem 4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>
          Product Title
          {/* {Product.title} */}
        </h1>
      </div>

      <br />

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <ProductImage detail={Product} />
          {/* <Image src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80' /> */}
        </Col>
        <Col lg={12} xs={24}>
          <ProductInfo />
          {/* <ProductInfo addToCart={addToCartHandler} detail={Product} /> */}
        </Col>
      </Row>
    </div>
  );
}

export default ProductPage;
