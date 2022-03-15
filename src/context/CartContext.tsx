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

interface ContextValue {
  addToCart: Dispatch<SetStateAction<Product[]>>;
  cart: Product[];
}

export const CartContext = createContext<ContextValue>({
  cart: [],

  // product: {title: "", price: 0},
  addToCart: () => {},
});

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<Product[]>([]);

  let contextData: ContextValue = { cart: cart, addToCart: setCart };
  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
