import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = ({ category }) => {
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productRef = collection(db, "productos");

    let productQuery = productRef;
    if (category) {
      productQuery = query(productRef, where("categoria", "==", category));
    }

    getDocs(productQuery)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
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