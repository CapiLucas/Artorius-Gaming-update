import { createContext, useEffect, useState } from "react";
    
export const CartContext = createContext();

const carritoInicial =  JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregaralCarrito = (item, cantidad) => {
  
      const itemAgregado = {...item, cantidad };
  
      const nuevoCarrito = [...carrito]; 
      const carritoHelper = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
  
      if (carritoHelper){
        carritoHelper.cantidad = cantidad
      }else{
        nuevoCarrito.push(itemAgregado)
      }
      setCarrito(nuevoCarrito)
    }
  
    const CartQuantity = () => {
      return carrito.length
    }
  
    const precioTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0) 
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

    return( 
        <CartContext.Provider value={{carrito, agregaralCarrito, CartQuantity, precioTotal, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
