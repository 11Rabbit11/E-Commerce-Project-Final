import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import { BASE_URL } from '../config';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    // Check if the product already exists in the cart
    const existItem = cartItems.find((x) => x._id === product._id);
    
    // Calculate the new quantity based on whether the item already exists or not
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(BASE_URL + `/api/products/${item._id}`);
    
    // Check if the product is still in stock after adding to the cart
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div className='shadow p-3 mb-4 bg-body rounded'>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className='img-fluid' alt={product.name} />
      </Link>
      <div className='product-card'>
        <div to={`/product/${product.slug}`}>
          <h6 className='product-name'>{product.name}</h6>
        </div>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <p>${product.price}</p>
        {product.countInStock === 0 ? (
          <div className='btn btn-light' disabled>
            Out of stock
          </div>
        ) : (
          <button
            className='btn btn-primary'
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
