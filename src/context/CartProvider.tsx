import { useContext } from "react";
import { CartItemContext } from "./CartContext";
import React from "react";
import { mockedProducts, Product } from "../products";

export default function CartProvider() {
  //   return function AddToCart() {
  const { removeItem, items, addItem } = useContext(CartItemContext);
  return (
    <div>
      <button
        onClick={() =>
          addItem({
            id: items.length + 1,
            image: undefined,
            title: "",
            text: "",
            price: 0,
            valuta: "",
          })
        }
      >
        Add to Cart
      </button>
    </div>
    //   items.map((product) => (
    //     <div>
    //       <p>{product.id}</p>
    //       <p>{product.title}</p>
    //       <p>antal</p>
    //     </div>
    //   ))}
  );
}
