import React, { createContext, useContext, useState } from "react";
import { Product } from "../products";
import { FC } from "react";
import { Next, Prev } from "react-bootstrap/esm/PageItem";
import ShippingOptions from "../components/Cart/ShippingOptions";
import { Form } from "react-bootstrap";

export interface ContextValue {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: (id: number) => void;
  getTotalPrice: () => number;
  getMoms: () => number;
  getShippingCost: () => number;
  emptyCartOnSubmit: () => void;
  cart: CartItem[];
  printForm: (e: any) => void;
  logForm: (e: any) => void;
  getCustomerInfo: (e: any) => void;
  logCustomer: (e: any) => void;
  cartLength: () => number;

  form: CustomerInfo;
  // customer: CustomerInfo[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerInfo {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  zip: string;
  phoneNumber: string;
  email: string;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  // customer: [],
  removeFromCart: () => {},
  addToCart: () => {},
  clearCart: () => {},
  getTotalPrice: () => 0,
  getMoms: () => 0,
  getShippingCost: () => 0,
  printForm: () => "",
  logForm: () => {},
  getCustomerInfo: () => "",
  logCustomer: () => [],
  cartLength: () => 0,
  form: {
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zip: "",
    phoneNumber: "",
    email: "",
  },

  emptyCartOnSubmit: () => {},
});

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [form, setForm] = useState<CustomerInfo>({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zip: "",
    phoneNumber: "",
    email: "",
  });

  const [customer, setCustomer] = useState<CustomerInfo[]>([]);

  // const customertest: CustomerInfo = {
  //   firstname: "",
  //   lastname: "",
  //   address: "",
  //   city: "",
  //   zip: "",
  //   phoneNumber: "",
  //   email: "",
  // };

  const addToCart = (product: Product) => {
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
  };
  const removeFromCart = (id: number) => {
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
  };
  const clearCart = (id: number) => {
    const newCart = cart.filter((cartItem) => cartItem.product.id !== id);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.product.price * cartItem.quantity;
    });
    return totalPrice;
  };

  const getMoms = () => {
    let totalPrice = 0;
    let moms = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.product.price * cartItem.quantity;
      moms = totalPrice * 0.12;
    });

    return moms;
  };

  const getShippingCost = () => {
    if ((radiobutton = checked)) {
      shippingcost = 25;
    }
    let shippingCost = 10;
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.product.price * cartItem.quantity;
      totalPrice = totalPrice * 0.12 + shippingCost;
    });
    return totalPrice;
  };

  // form: {
  //   firstname: "",
  //   lastname: "",
  //   address: "",
  //   city: "",
  //   zip: "",
  //   phoneNumber: "",
  //   email: "",
  // },

  const printForm = (customer: CustomerInfo) => {
    // setForm({...form, event.target.name, event.target.value});
    // console.log(event.target.value);
    console.log(customer);
    setForm(customer);
  };
  // userInformation: {},

  const emptyCartOnSubmit = () => {
    setCart([]);
  };

  const logForm = (e: any) => {
    console.log(form);
  };

  const getCustomerInfo = (event: any) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
    // console.log(event.target.value);
  };

  const logCustomer = (e: any) => {
    console.log(customer);
  };

  const cartLength = () => {
    return cart.reduce((prev, next) => prev + next.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getMoms,
        printForm,
        emptyCartOnSubmit,
        logForm,
        getCustomerInfo,
        logCustomer,
        cartLength,
        getShippingCost,
        form,
        // customer,
        cart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
