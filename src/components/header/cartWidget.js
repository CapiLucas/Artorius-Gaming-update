import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const {CartQuantity} = useContext(CartContext)
  return (
    <div className="cart-widget">
      <Link to={"/cart"}><ShoppingCartIcon sx={{ color: 'papayawhip' }} fontSize="large"/></Link>
      <span className="cart-widget-notification">{CartQuantity()}</span>
    </div>
  );
}
export default CartWidget;