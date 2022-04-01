import '../App.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const MiniProductCard = ({ product }) => {
  const productId = product._id;

  return (
    <Card className='my-3 p-3 rounded border-0'>
      <Link to={`/products/${productId}`}>
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
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MiniProductCard;
