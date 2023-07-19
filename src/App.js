import "./App.css";
import NavBar from "./components/header/navbar";
import Saludo from "./components/header/saludo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js.map";
import {Banner} from "./components/header/Banner";
import { ItemListContainer } from "./components/main/ItemListContainer";


function App() {

  return (
    <div className="App">
      <div>
        <NavBar />
        <Banner/>
        <Saludo greeting="¡Bienvenido a nuestra tienda en línea!" />
        <div className="container">
          <ItemListContainer category={"gabinete"}/>   
        </div>
      </div>
    </div>
  );

}

export default App;
// ItemListContainer puede cambiarse añadiendo prompt category={pc/notebooks etc.}