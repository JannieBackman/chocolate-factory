import { useContext, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { FaProductHunt, FaShoppingCart } from "react-icons/fa";
import OrderInformation from "../Cart/OrderInformation";
import { mockedProducts, Product } from "../../products";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../../context/CartContext";
import AmountCounter from "../AmountCounter";
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
          {cart.map((product) => (
            <div>
              <p>
                {product.title} {product.price} {product.valuta}
              </p>
              <AmountCounter product={product} />
              <span>
                <FaTrashAlt
                  onClick={() => context.removeFromCart(product.id)}
                />
              </span>
            </div>
          ))}
          <p>Total price: </p>
          <div className="d-grid gap-2">
            <Button variant="dark" size="lg" href="/cart">
              Checkout
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Basket;
