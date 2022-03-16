import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { mockedProducts } from "../../products";
import Basket from "./BasketCart";

function Header() {
  return (
    <div className="header" style={rootStyle}>
      <div>
        <Link style={linkStyle} to="/">
          Chocolate Factory
        </Link>
      </div>
      <div style={cartStyle}>
        <Basket />
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
