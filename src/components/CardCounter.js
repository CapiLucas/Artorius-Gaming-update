import { useState } from "react";

export const CardCounter = () => {
  const [Number, setNumber] = useState(0);

  const sumar = () => {
    if (Number < 10) {
      setNumber((prevNumber) => Math.min(prevNumber + 1, 10));
    }
  };

  const restar = () => {
    if (Number > 0) {
      setNumber((prevNumber) => Math.max(prevNumber - 1, 0));
    }
  };

  return (
    <div className="valores">
      <button onClick={sumar}>+</button>
      <p>{Number}</p>
      <button onClick={restar}>-</button>
    </div>
  );
};