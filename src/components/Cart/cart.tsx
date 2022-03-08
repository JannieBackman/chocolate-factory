import { FaShoppingCart } from "react-icons/fa";
import {CSSProperties} from "react";
import {Link} from "react-router-dom";

function Cart() {
  return (
<div>
      <div style={cartStyle}>
        <Link style={linkStyle} to="/cart">
            <FaShoppingCart />
        </Link>
      </div>



</div>
)
}

const cartStyle: CSSProperties = {
    display: "flex",

}

const linkStyle:CSSProperties = {
    color: "black",
    textDecoration: "none",
}



export default Cart;
