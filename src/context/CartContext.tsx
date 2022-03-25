import React, { createContext, useContext, useState } from "react";
import { Product } from "../products";
import { FC } from "react";

export interface ContextValue {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: (id: number) => void;
  getTotalPrice: () => number;
  getMoms: () => number;
  emptyCartOnSubmit: () => void;
  cart: CartItem[];
  printForm: (e: any) => void;
  // userInformation: object;
  form: {}
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
  getMoms: () => 0,
  printForm: () => '',
 form: {
   firstname: '',
   lastname: '',
   address: '',
   city: '',
   zip: '',
   phoneNumber: '',
   email: '',
 },

  emptyCartOnSubmit: () => {},

});

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [form, setForm] = useState({})


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

    getMoms: () => {
      let totalPrice = 0;
      let moms = 0;
      cart.forEach((cartItem) => {
        totalPrice += cartItem.product.price * cartItem.quantity;
        moms = totalPrice * 0.12;
      });

      return moms;
    },

    form: '',

    printForm: (event:any) => {
      setForm({...form, [event.target.name]: event.target.value})
      console.log(event.target.value)
    },
    // userInformation: {},

    emptyCartOnSubmit: () => {
      setCart([]);
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
