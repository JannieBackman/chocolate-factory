import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "../pages/MainPage";
import NavigationBar from "./Layout/Navbar";
import Checkout from "../pages/CheckoutPage";
import DetailsChocolate from "../pages/DetailProductPage";
import ErrorBoundary from "./ErrorBoundary";
import ProductsPage from "../pages/ProductsPage";
import CartProvider from "../context/CartContext";
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
                <Route path="/CheckOut" element={<Checkout />} />

                <Route
                  path="/DetailsChocolate/:productId"
                  element={<DetailsChocolate />}
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
