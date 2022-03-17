import { useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import "./AmountCounter.css";
import Cart from "./Cart/cartIcon";

function AmountCounter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={handleIncrement}>
        +
      </button>
      <p className="amount">{count}</p>
      <button className="button decrement-button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

export default AmountCounter;
