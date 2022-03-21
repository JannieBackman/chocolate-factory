import { useContext, useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import "./AmountCounter.css";
import Cart from "./Cart/cartIcon";
import { Product } from "../products";
import { number } from "yup";
import { propTypes } from "react-bootstrap/esm/Image";
import { CartContext } from "../context/CartContext";

export interface Props {
  product: Product;
  quantity: number;
}

function AmountCounter({ product, quantity }: Props) {
  const cart = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(product.price);

  /* const handleIncrement = () => {
    setCount(quantity + 1);

    setTotalPrice(quantity * product.price);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setCount(quantity - 1);
    }
    if (quantity > 1) {
      setTotalPrice(quantity - product.price);
    }
  }; */

  return (
    <div className="container">
      <button className="button" onClick={() => cart.addToCart(product)}>
        +
      </button>
      <p className="amount">{quantity}</p>
      <button
        className="button decrement-button"
        onClick={() => cart.removeFromCart(product.id)}
      >
        -
      </button>
    </div>
  );
}

export default AmountCounter;
