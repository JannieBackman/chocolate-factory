import { CSSProperties } from "react";
import Cart from "../Cart/cart";
import { Link } from "react-router-dom";

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
  justifyContent: "center",
  backgroundColor: "#333",
  color: "whitesmoke",
  height: "7rem",
};

const linkStyle: CSSProperties = {
  color: "white",
  fontSize: "3rem",
  textDecoration: "none",
};

const cartStyle: CSSProperties = {
  fontSize: "2rem",
  color: "white",
};
export default Header;
