import { useContext, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { FaProductHunt, FaShoppingCart } from "react-icons/fa";
import OrderInformation from "../Cart/OrderInformation";
import { mockedProducts, Product } from "../../products";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../../context/CartContext";
import AmountCounter from "../AmountCounter";
import { Link } from "react-router-dom";

import { FaTrashAlt } from "react-icons/fa";

function Basket() {
  let context = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useContext(CartContext).cart;

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <FaShoppingCart />
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((cartItem) => (
            <div>
              <p>
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
                    onClick={() => context.clearCart(cartItem.product.id)}
                  />
                </span>
              </div>
            </div>
          ))}
          <p>Total price: </p>
          <div className="d-grid gap-2">
            <Link to="/cart">
              <Button variant="dark" size="lg">
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
