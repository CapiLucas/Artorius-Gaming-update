import { useState, useEffect } from "react";
import data from "../productos.json";
import ItemList from "./ItemList";

export const ItemListContainer = ({ category }) => {
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, 1000);
    });
  };

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        const filteredProducts = category ? res.filter((product) => product.categoria === category) : res;
        setProductos(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="background">
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ItemList Productos={Productos} />
          </div>
        )}
      </div>
    </div>
  );
};