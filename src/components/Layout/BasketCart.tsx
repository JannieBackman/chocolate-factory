import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { render } from "react-dom";
import { FaShoppingCart } from "react-icons/fa";
import OrderInformation from "../Cart/OrderInformation";
import "bootstrap/dist/css/bootstrap.min.css";

function Basket() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaShoppingCart />
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <OrderInformation />
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" href="/cart">
              Checkout
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Basket;