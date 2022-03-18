import { useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { number } from "yup";
import { Product } from "../products";
import "./AmountCounter.css";
import Cart from "./Cart/cartIcon";

export interface Props {
  product: Product;
}

function AmountCounter({ product }: Props) {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleIncrement = () => {
    setCount(count + 1);

    setTotalPrice(count * product.price);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count > 1) {
      setTotalPrice(count - product.price);
    }
  };

  // const incrementTotalPrice = () => {
  //   setTotalPrice(count * product.price);
  // };

  return (
    <div className="container">
      <button className="button" onClick={handleIncrement}>
        +
      </button>
      <p className="amount">{count}</p>
      <button className="button decrement-button" onClick={handleDecrement}>
        -
      </button>

      <div>
        <p> {totalPrice} SEK</p>
      </div>
    </div>
  );
}

export default AmountCounter;
