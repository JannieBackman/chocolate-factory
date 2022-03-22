import { State } from "history";
import React, {
  createContext,
  Dispatch,
  Props,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Product } from "../products";
import { FC } from "react";
import { FaProductHunt } from "react-icons/fa";
import { createTypePredicateNodeWithModifier } from "typescript";

export interface ContextValue {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: (id: number) => void;
  getTotalPrice: () => number;
  cart: CartItem[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  removeFromCart: () => {},
  addToCart: () => {},
  clearCart: () => {},
  getTotalPrice: () => 0,
});

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  let contextData: ContextValue = {
    cart: cart,
    addToCart: (product) => {
      let productListToUpdate = [...cart];
      let foundIndex = cart.findIndex(
        (cartItem) => product.id === cartItem.product.id
      );
      if (foundIndex >= 0) {
        productListToUpdate[foundIndex].quantity++;
      } else {
        productListToUpdate.push({ product, quantity: 1 });
      }
      setCart(productListToUpdate);
    },
    removeFromCart: (id) => {
      let productListToUpdate = [...cart];
      let foundIndex = cart.findIndex((cartItem) => id === cartItem.product.id);
      if (foundIndex >= 0 && productListToUpdate[foundIndex].quantity > 1) {
        productListToUpdate[foundIndex].quantity--;
      } else {
        productListToUpdate = cart.filter(
          (cartItem) => cartItem.product.id !== id
        );
      }
      setCart(productListToUpdate);
    },
    clearCart: (id) => {
      const newCart = cart.filter((cartItem) => cartItem.product.id !== id);
      setCart(newCart);
    },
    getTotalPrice: () => {
      let totalPrice = 0;
      cart.forEach((cartItem) => {
        totalPrice += cartItem.product.price * cartItem.quantity;
      });
      return totalPrice;
    },
  };

  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
