import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import NavigationBar from "./Layout/Navbar";
import Chocolates from "./ChocolatesPage";

function App() {
    return (
        <div>
            <Header/>
            <NavigationBar/>

                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/Chocolates" element={<Chocolates />} />
                </Routes>

            <Footer/>
        </div>
    );
}

export default App;
