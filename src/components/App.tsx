import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import NavigationBar from "./Layout/Navbar";
import Chocolates from "./Products/ProductsPage";
import AboutUs from "./About/AboutUs";
import PaymentBasket from "./Cart/PaymentBasket";

function App() {
    return (
        <div>
            <Header/>
            <NavigationBar/>

                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/" element={<Header/>}/>
                    <Route path="/Chocolates" element={<Chocolates />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/cart" element={<PaymentBasket />} />
                </Routes>

            <Footer/>
        </div>
    );
}

export default App;
