import "./App.css";
import NavBar from "./components/header/navbar";
import Saludo from "./components/header/saludo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js.map";
import {Banner} from "./components/header/Banner";
import { ItemListContainer } from "./components/main/ItemListContainer";
import {Sifbot} from "./components/Sifbot";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import FooterContainer from "./components/footer/FooterContainer";
import Nosotros from "./components/main/Nosotros";
import { useState } from "react";
import { CartContext } from "./components/context/CartContext";


function App() {

  const [carrito, setCarrito] = useState([]);

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

  return (
    <div className="App">
      <CartContext.Provider value={{carrito, agregaralCarrito}}>
        <BrowserRouter>
          <Sifbot/>
          <NavBar />
          <Banner/>
          <Saludo greeting="¡Bienvenido a nuestra tienda en línea!" />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Nosotros" element={<Nosotros/>} />
            <Route path="/productos/PC" element={<ItemListContainer category={"pc"} />} />
            <Route path="/productos/Monitores" element={<ItemListContainer category={"Monitor"} />} />
            <Route path="/productos/Gabinetes" element={<ItemListContainer category={"gabinete"} />} />
            <Route path="/productos/Notebooks" element={<ItemListContainer category={"Notebook"} />} />

          </Routes>
          <FooterContainer/>  
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );

}

export default App;
