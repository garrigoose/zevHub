import '../App.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import products from '../products';

const ProductCard = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/products/${product._id}`}>
        <Card.Img
          variant='top'
          src={product.image}
          alt='product image'
          className='product-image'
        />
      </Link>

      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          {/* <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            /> */}
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
      {/* <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer> */}
    </Card>
  );
};

export default ProductCard;
