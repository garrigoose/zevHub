import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row, Container } from 'react-bootstrap';
import Message from './Message';
import Loader from './Loader';
import ProductCard from '../Product/ProductCard';
import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const productList = useSelector((state) => state.productList);
  const state = useSelector((state) => state);
  const { loading, error, products } = productList;
  console.log(state);

  useEffect(() => {
    dispatch(listProducts(keyword));
    setSearchResults(
      products.filter((p) =>
        p.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }, [dispatch, keyword]);

  return (
    <div className='pt-5'>
      <Container>
        <h1>Search Results</h1>
        <CardGroup className='gap-4'>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Row>
                {searchResults.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </CardGroup>
      </Container>
    </div>
  );
};

export default SearchResults;
