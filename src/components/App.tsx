import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import NavigationBar from "./Layout/Navbar";
import Chocolates from "./Products/ProductsPage";
import OrderConfirmation from "./Cart/OrderInformation";
import Checkout from "./Cart/Checkout";
import DetailsChocolate from "./Products/DetailsChocolate";
import ErrorBoundary from "./ErrorBoundary";
import AccordionMenu from "./Layout/AccordionMenu";
import {mockedProducts} from "../products";

function App() {

  return (
    <div>
      <ErrorBoundary>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <NavigationBar />
        <ErrorBoundary>
          <Routes>
            {/* <ErrorBoundary>      ---- if you want to see 404page*/}
            <Route path="/" element={<Main />} />
            <Route path="/" element={<Header />} />
            <Route path="/Chocolates" element={<Chocolates />} />
            {/* </ErrorBoundary> ---- if you want to see 404page*/}
            <Route
              path="/cart"
              element={<AccordionMenu />}
            />
            <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
            <Route path="/CheckOut" element={<Checkout />} />

            {/*Ändra så att det inte är hårdkodat vilken man trycker på*/}
            <Route path="/DetailsChocolate" element={<DetailsChocolate product={mockedProducts[1]} />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
