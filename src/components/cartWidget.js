import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <a><ShoppingCartIcon color="black" fontSize="large"/>0</a>
      <span className="cart-widget-notification"></span>
    </div>
  );
  
};

export default CartWidget;