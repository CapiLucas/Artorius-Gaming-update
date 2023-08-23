import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState();
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        };
        
        const pedidosRef = collection(db, "Pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
            });
    };

    const handleCerrarMensaje = () => {
        setPedidoId(null);
        vaciarCarrito();
    };

    if (pedidoId) {
        return (
            <div className='container'>
                <h1>Muchas Gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
                <p>Para proseguir envia ${precioTotal()} al CVU 0000003100037833799807 con los ultimos 4 digitos del ID de tu compra</p>
                <p>Se acepta transferencia, debito y credito</p>
                <button onClick={handleCerrarMensaje} className='Cerrar'>Cerrar</button>
            </div>
        );
    }

    return (
        <div className='Container'>
            <h1 className='title'>Checkout</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <input type='text' placeholder='Ingresar tu nombre' {...register("nombre")} />
                <input type='email' placeholder='Ingresar tu e-mail' {...register("email")} />
                <input type='phone' placeholder='Ingresar tu telefono' {...register("telefono")} />
                <input type='text' placeholder='Direccion' {...register("direccion")} />
                <input type='text' placeholder='Localidad' {...register("localidad")} />
                <input type='text' placeholder='Codigo Postal' {...register("CodigoPostal")} />

                <button className='enviar' type='submit'>Comprar</button>
            </form>
        </div>
    );
}

export default Checkout;