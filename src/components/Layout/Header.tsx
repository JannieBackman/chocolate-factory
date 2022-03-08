import { CSSProperties } from "react";
import Cart from "../cart";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div style={rootStyle}>
      <Link to="/">Chocolate Factory</Link>
      <Cart />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#333",
  color: "whitesmoke",
};
export default Header;
