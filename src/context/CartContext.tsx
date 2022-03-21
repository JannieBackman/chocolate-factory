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

export interface ContextValue {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  cart: Product[];
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  removeFromCart: () => {},
  addToCart: () => {},
});

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<Product[]>([]);

  let contextData: ContextValue = {
    cart: cart,
    addToCart: (product) => {
      setCart([...cart, product]);
    },
    removeFromCart: (id) => {
      const newCart = cart.filter((product) => product.id !== id);
      setCart(newCart);
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
