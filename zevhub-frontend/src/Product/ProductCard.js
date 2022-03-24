import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Rating from './Rating';
import products from '../products';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        {/* <Link to={`/product/${product._id}`}> */}
        <Card.Img variant='top' src='{product.image}' alt='product image' />
        {/* </Link> */}

        <Card.Body>
          {/* <Link to={`/product/${product._id}`}> */}
          <Card.Title>Card title</Card.Title>
          {/* </Link> */}

          <Card.Text>
            {/* <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          /> */}
            <p>ratings and number of reviews</p>
          </Card.Text>

          {/* <Card.Text as='h3'>${product.price}</Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </div>
  );
};

export default ProductCard;
