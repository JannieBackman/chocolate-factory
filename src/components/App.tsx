import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "../pages/MainPage";
import NavigationBar from "./Layout/Navbar";
import Checkout from "../pages/CheckoutPage";
import DetailsChocolate from "../pages/DetailProductPage";
import ErrorBoundary from "./ErrorBoundary";
import CheckoutPage from "../pages/CheckoutPage";
import { mockedProducts } from "../products";
import ProductsPage from "../pages/ProductsPage";
import CartProvider from "../context/CartContext";
import OrderInformation from "./Cart/OrderInformation";
import BuyProvider from "../context/BuyContext";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <CartProvider>
          <BuyProvider>
            <ErrorBoundary>
              <Header />
            </ErrorBoundary>
            <NavigationBar />
            <ErrorBoundary>
              <Routes>
                {/* <ErrorBoundary>      ---- if you want to see 404page*/}
                <Route path="/" element={<Main />} />
                <Route path="/" element={<Header />} />
                <Route path="/Chocolates" element={<ProductsPage />} />
                {/* </ErrorBoundary> ---- if you want to see 404page*/}
                <Route path="/cart" element={<CheckoutPage />} />
                <Route
                  path="/OrderInformation"
                  element={<OrderInformation />}
                />
                <Route path="/CheckOut" element={<Checkout />} />

                <Route
                  path="/DetailsChocolate"
                  element={<DetailsChocolate product={mockedProducts[1]} />}
                />
              </Routes>
            </ErrorBoundary>
          </BuyProvider>
        </CartProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
