import "./App.css";
import NavBar from "./components/navbar.js";
import ItemListContainer from "./components/itemListContainer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js.map";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      </div>
    </div>
  );
  
}

export default App;
