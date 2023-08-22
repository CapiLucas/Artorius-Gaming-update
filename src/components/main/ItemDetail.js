import React, { useContext, useState } from 'react'
import { CardCounter } from '../CardCounter'
import { CartContext } from '../context/CartContext';

function ItemDetail({item}) {

  const {carrito, agregaralCarrito}=useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    cantidad < item.stock && setCantidad(cantidad+1);
  };

  const restar = () => {
    cantidad > 1 && setCantidad(cantidad-1);
  };

  return (
    <div className='containerDetail'>
        <div className='producto-detalle'>
            <img className="productImgDetail" src={item.url} alt="img del producto" />
            <h1 className="productNameDetail">{item.name}</h1>
            <h3 className="productPriceDetail">${item.price}</h3>
            <h3 className="productdescDetail">{item.description}</h3>
            <h5 className="StockDetail">Hay Stock de:{item.stock}</h5>
            <CardCounter 
              cantidad={cantidad} 
              sumar={sumar} 
              restar={restar} 
              agregar={()=>{agregaralCarrito(item,cantidad)}}
            />
        </div>
    </div>
  )
}

export default ItemDetail