import '../App.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  const productId = product._id;

  return (
    // <Card className='my-3 p-3 rounded border-0'>
    //   <Link to={`/products/${productId}`}>
    //     <Card.Img
    //       variant='top'
    //       src={product.image}
    //       alt='product image'
    //       className='product-image'
    //     />
    //   </Link>

    //   <Card.Body>
    //     <Link to={`/products/${product._id}`}>
    //       <Card.Title as='div'>
    //         <strong>{product.title}</strong>
    //       </Card.Title>
    //     </Link>

    //     <Card.Text as='div'>
    //       {/* <Rating
    //           value={product.rating}
    //           text={`${product.numReviews} reviews`}
    //         /> */}
    //     </Card.Text>

    //     <Card.Text as='h3'>${product.price}</Card.Text>
    //   </Card.Body>
    //   {/* <Card.Footer>
    //       <small className='text-muted'>Last updated 3 mins ago</small>
    //     </Card.Footer> */}
    // </Card>
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${productId}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${productId}`}>
          <Card.Title as='div'>
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
