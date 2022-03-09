import { CSSProperties } from "react";
import Cart from "../Cart/cart";
import { Link } from "react-router-dom";
import NavigationBar from "./Navbar";

function Header() {
  return (
    <div className="header" style={rootStyle}>
      <div>
        <Link style={linkStyle} to="/">
          Chocolate Factory
        </Link>
      </div>
      <div style={cartStyle}>
        <Cart />
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#333",
  color: "whitesmoke",
  height: "7rem",
};

const linkStyle: CSSProperties = {
  color: "whitesmoke",
  fontSize: "3rem",
  textDecoration: "none",
};

const cartStyle: CSSProperties = {
  fontSize: "2rem",
  color: "whitesmoke",
};
export default Header;
