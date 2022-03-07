import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Navigationbar from "./Layout/Navbar";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter> */}
      <Header />
      <Navigationbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
