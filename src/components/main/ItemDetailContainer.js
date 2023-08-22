import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        
        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setItem({ ...resp.data(), id: resp.id });
                } else {
                    console.log("Document not found");
                }
            })
            .catch(error => {
                console.error("Error fetching document:", error);
            });
    }, [id]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;