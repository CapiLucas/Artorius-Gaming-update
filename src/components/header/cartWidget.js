import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <a href="#"><ShoppingCartIcon sx={{ color: 'papayawhip' }} fontSize="large"/></a>
      <span className="cart-widget-notification">0</span>
    </div>
  );
}
export default CartWidget;