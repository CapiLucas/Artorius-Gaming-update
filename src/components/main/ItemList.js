import { CardCounter } from "../CardCounter";

const ItemList = ({ Productos }) => {
  if (!Productos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cardContainer">
      {Productos.length > 0 &&
        Productos.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img className="productImg" src={product.url} alt="img del producto"></img>
              <h1 className="productName">{product.name}</h1>
              <CardCounter />
              <h3 className="productPrice">{product.price}</h3>
              <p className="productDesc">{product.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;