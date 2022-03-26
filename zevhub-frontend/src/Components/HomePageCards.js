import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardGroup, Col, Row, Container } from 'react-bootstrap';
import ProductCard from '../Product/ProductCard';
import { listProducts } from '../actions/productActions';

const HomePageCards = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // const products = [];

  return (
    <div className='pt-5'>
      <Container>
        <h1>Latest Products</h1>
        <CardGroup className='gap-4'>
          <Row xs={1} sm={2} md={4} className='g-4'>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default HomePageCards;
