
export const CardCounter = ({cantidad, sumar, restar, agregar}) => {


  return (
    <div className="cardCounterContainer">
      <div className="valores">
        <button onClick={sumar}>+</button>
        <p>{cantidad}</p>
        <button onClick={restar}>-</button>
      </div>
      <button className="agregar" onClick={agregar}>Agregar al carrito</button>
    </div>
  );
};