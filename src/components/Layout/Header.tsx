import { CSSProperties } from "react";
import Cart from "../Cart/cart";
import {Link} from "react-router-dom";


function Header() {
  return (
    <div style={rootStyle}>
     <Link style={linkStyle} to="/">Chocolate Factory</Link>
      <Cart />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#333",
  color: "whitesmoke",
    height: "7rem"
};

const linkStyle:CSSProperties = {
    color: "white",
    fontSize: "3rem",
    textDecoration: "none",

}
export default Header;
