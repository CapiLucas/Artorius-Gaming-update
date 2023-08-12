import Item from "./Item";

const ItemList = ({ Productos }) => {
  if (!Productos) {
    return <div>Loading...</div>;
  }
  return(
    <div className="cardContainer">
      {Productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
    </div>
  )
 
};

export default ItemList;