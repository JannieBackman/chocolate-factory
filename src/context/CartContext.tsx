import { createContext, useContext, useState } from "react";
import { Product } from "../products";
import { FC } from "react";

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

// Context for adding/removing from cart, getting the price, adding shippingcost/moms,
// printing out the addressform in checkout
export const CartContext = createContext<ContextValue>({
  cart: [],

  removeFromCart: () => {},
  addToCart: () => {},
  clearCart: () => {},
  getTotalPrice: () => 0,
  getMoms: () => 0,
  getShippingCost: () => {},
  printForm: () => "",
  cartLength: () => 0,
  printShipping: () => "",
  getTotalPriceWithShipping: () => {},
  emptyCartOnSubmit: () => {},
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

  // Adds a product to the cart
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

  // Removes an product from the cart
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

  // The total price depending on the products price and the quantity
  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.product.price * cartItem.quantity;
    });
    return totalPrice;
  };

  // Adds moms to the price
  const getMoms = () => {
    let totalPrice = 0;
    let moms = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.product.price * cartItem.quantity;
      moms = Math.round(totalPrice * 0.12);
    });

    return moms;
  };

  const getShippingCost = () => {
    let shippingCost = 0;
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

  const printShipping = (shipper: string) => {
    console.log(shipper);
    setShipper(shipper);
  };

  const printForm = (customer: CustomerInfo) => {
    setForm(customer);
  };

  const emptyCartOnSubmit = () => {
    setCart([]);
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
