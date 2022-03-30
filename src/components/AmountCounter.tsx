import { useContext } from "react";
import "./AmountCounter.css";
import { Product } from "../products";
import { CartContext } from "../context/CartContext";

export interface Props {
  product: Product;
  quantity: number;
}

function AmountCounter({ product, quantity }: Props) {
  const cart = useContext(CartContext);

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
