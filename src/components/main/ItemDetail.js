import React from 'react'

function ItemDetail({item}) {
  return (
    <div className='containerDetail'>
        <div className='producto-detalle'>
            <img className="productImgDetail" src={item.url} alt="img del producto" />
            <h1 className="productNameDetail">{item.name}</h1>
            <h3 className="productPriceDetail">{item.price}</h3>
            <p className="productDescDetail">{item.description}</p>
        </div>
    </div>
  )
}

export default ItemDetail