import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import {useForm} from "react-hook-form"
import {collection, addDoc} from "firebase/firestore"
import { db } from '../../firebase/config'
 
const Checkout = () => {

    const [pedidoId, setPedidoId] = useState()

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    
    const {register, handleSubmit} = useForm()
 
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        const pedidosRef = collection(db,"Pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }

    if(pedidoId){
        return  (
            <div className='container'>
                <h1>Muchas Gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
                <p>Para proseguir envia {precioTotal()} al CBU 0000003100037833799807 con los ultimos 4 digitos del ID de tu compra</p>
                <p>Se acepta transferencia, debito y credito</p>
            </div>
        )
    }

  return (
    <div className='Container'>
        <h1 className='title'>Checkout</h1>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>
            <input type='text' placeholder='Ingresar tu nombre' {...register("nombre")}/>
            <input type='email' placeholder='Ingresar tu e-mail' {...register("email")}/>
            <input type='phone' placeholder='Ingresar tu telefono' {...register("telefono")}/>
            <button className='enviar' type='submit'>Comprar</button>
        </form>
    </div>
  )
}

export default Checkout