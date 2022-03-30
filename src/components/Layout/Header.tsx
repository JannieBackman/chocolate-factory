import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Basket from "./Basket";
import "./Layout.css";

function Header() {
  return (
    <div className="header" style={rootStyle}>
      <div>
        <Link className="headerTitle" to="/">
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

const cartStyle: CSSProperties = {
  fontSize: "2rem",
  color: "whitesmoke",
};
export default Header;
