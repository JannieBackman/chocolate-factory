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
  getShippingCost: () => void;
  emptyCartOnSubmit: () => void;
  cart: CartItem[];
  printForm: (e: any) => void;
  logForm: (e: any) => void;
  cartLength: () => number;
  printShipping: (e: any) => void;
  getTotalPriceWithShipping: () => void;

  form: CustomerInfo;
  shipper: string;
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

// export interface ShippingInfo {
//   name: string;
//   price: string;
// }

export const CartContext = createContext<ContextValue>({
  cart: [],

  removeFromCart: () => {},
  addToCart: () => {},
  clearCart: () => {},
  getTotalPrice: () => 0,
  getMoms: () => 0,
  getShippingCost: () => {},
  printForm: () => "",
  logForm: () => {},
  cartLength: () => 0,
  printShipping: () => "",
  getTotalPriceWithShipping: () => {},
  form: {
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zip: "",
    phoneNumber: "",
    email: "",
  },
  shipper: "",

  //TODO: Skapa variabel för fraktsätt
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

  const [shipper, setShipper] = useState("");

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

  // const getPriceWithShipping = () => {
  //   const total = getTotalPrice()
  //   return total + shipping
  // }

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
    let shippingCost = 0;
    //console.log("SHIPPER FROM GET SHIPPING COST: ", shipper);
    if (shipper === "postnord") {
      shippingCost = 25;
    } else if (shipper === "dhl") {
      shippingCost = 19;
    } else if (shipper === "bring") {
      shippingCost = 39;
    }
    return shippingCost;
  };

  const getTotalPriceWithShipping = () => {
    let shipperCost = 0;
    const productsCost = getTotalPrice();
    if (shipper === "postnord") {
      shipperCost = 25;
    } else if (shipper === "dhl") {
      shipperCost = 19;
    } else if (shipper === "bring") {
      shipperCost = 39;
    }
    return productsCost + shipperCost;
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

  const printShipping = (shipper: string) => {
    console.log(shipper);
    setShipper(shipper);
  };

  const printForm = (customer: CustomerInfo) => {
    // setForm({...form, event.target.name, event.target.value});
    // console.log(event.target.value);
    // console.log(customer);
    setForm(customer);
  };
  // userInformation: {},

  const emptyCartOnSubmit = () => {
    setCart([]);
  };

  const logForm = (e: any) => {
    console.log(form);
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
        cartLength,
        getShippingCost,
        printShipping,
        getTotalPriceWithShipping,
        form,
        shipper,
        cart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
