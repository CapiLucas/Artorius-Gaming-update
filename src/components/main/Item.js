import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
    <div className='card' key={producto.id}>
        <img className="productImg" src={producto.url} alt="img del producto" />
        <h1 className="productName">{producto.name}</h1>
        <h3 className="productPrice">${producto.price}</h3>
        <p className="productDesc">{producto.description}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Más</Link>    
    </div>
  )
}

export default Item