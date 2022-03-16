import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Main from "../pages/MainPage";
import NavigationBar from "./Layout/Navbar";
import Chocolates from "../pages/ProductsPage";
import OrderConfirmation from "./Cart/OrderInformation";
import Checkout from "../pages/ConfirmationPage";
import DetailsChocolate from "../pages/DetailProductPage";
import ErrorBoundary from "./ErrorBoundary";
import AccordionMenu from "../pages/AccordionMenuPage";
import { mockedProducts, Product } from "../products";
import ProductsPage from "../pages/ProductsPage";
import CartProvider from "../context/CartContext";

function App() {
  const handleAddToCart = (clickedItem: Product) => null;
  return (
    <div>
      <ErrorBoundary>
        <CartProvider>
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
              <Route path="/cart" element={<AccordionMenu />} />
              <Route
                path="/OrderConfirmation"
                element={<OrderConfirmation product={mockedProducts[1]} />}
              />
              <Route path="/CheckOut" element={<Checkout />} />

              <Route
                path="/DetailsChocolate"
                element={<DetailsChocolate product={mockedProducts[1]} />}
              />
            </Routes>
          </ErrorBoundary>
        </CartProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
