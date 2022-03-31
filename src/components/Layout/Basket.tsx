import { useContext, useState } from "react";
import { Button, Offcanvas, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../../context/CartContext";
import AmountCounter from "../AmountCounter";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

// Shows basket as an offcanvas sidebar that slides in when pressing the cart icon

function Basket() {
  let { cart, getTotalPrice, clearCart, cartLength } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="cartButton" variant="dark" onClick={handleShow}>
        <FaShoppingCart />
        <Badge style={{ marginLeft: ".5rem" }} bg="danger">
          {cartLength()}
        </Badge>
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((cartItem) => (
            <div key={cartItem.product.id}>
              <p>
                <img
                  src={cartItem.product.image}
                  alt="product"
                  style={{ width: "4rem" }}
                />{" "}
                {cartItem.product.title} {cartItem.product.price}{" "}
                {cartItem.product.valuta}
              </p>
              <div style={{ display: "flex", paddingRight: "1rem" }}>
                <AmountCounter
                  product={cartItem.product}
                  quantity={cartItem.quantity}
                />
                <span>
                  <FaTrashAlt
                    style={{ cursor: "pointer" }}
                    onClick={() => clearCart(cartItem.product.id)}
                  />
                </span>
              </div>
            </div>
          ))}
          <p>Total price: {getTotalPrice()}:-</p>
          <div className="d-grid gap-2">
            <Link to="/Checkout">
              <Button variant="dark" size="lg" onClick={handleClose}>
                Checkout
              </Button>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Basket;
