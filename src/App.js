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


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Sifbot/>
          <NavBar />
          <Banner/>
          <Saludo greeting="¡Bienvenido a nuestra tienda en línea!" />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos/PC" element={<ItemListContainer category={"pc"} />} />
            <Route path="/productos/Monitores" element={<ItemListContainer category={"Monitor"} />} />
            <Route path="/productos/Gabinetes" element={<ItemListContainer category={"gabinete"} />} />
            <Route path="/productos/Notebooks" element={<ItemListContainer category={"Notebook"} />} />
          </Routes>
          <FooterContainer/>  
        </BrowserRouter>
    </div>
  );

}

export default App;
// ItemListContainer puede cambiarse añadiendo prompt category={pc/notebooks etc.}