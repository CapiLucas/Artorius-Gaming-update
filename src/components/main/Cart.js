import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }
    return (
        <div className='container'>

            <div>
            <h1 className='title'>Carrito</h1>
            </div>

            <div className='CartItemContainer'>
            {
                carrito.map((prod) => (
                    <div key={prod.id} className='cartItem'>
                        <h3>{prod.name}</h3>
                        <img className="productImgCart" src={prod.url} alt="img del producto" />
                        <p>Precio Unit: ${prod.price}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <p>Precio Total: ${prod.price * prod.cantidad}</p>
                    </div>
                ))
            }
            
            </div>


            { carrito.length > 0 ? 
                <>
                    <h2>Precio total: {precioTotal()}</h2>
                    <button onClick={handleVaciar} className='borrar'>Vaciar Carrito</button>
                </>:
                <h2>El carrito esta vacio:</h2>
               

            }

        </div>

    )
}

export default Cart