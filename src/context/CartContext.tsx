import React, { useContext } from "react";
import { mockedProducts, Product } from "../products";

interface CartContext {
  addItem: (newItem: Product) => void;
  removeItem: (itemID: number) => void;

  items: Product[];
}

export const CartItemContext = React.createContext<CartContext>({
  addItem: () => {},

  removeItem: () => {},
  items: [],
});
