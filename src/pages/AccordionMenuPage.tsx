import { Accordion } from "react-bootstrap";
import ShippingOptions from "../components/Cart/ShippingOptions";
import PaymentOptionKlarna from "../components/Cart/PaymentOptionKlarna";
import PaymentOptionMastercard from "../components/Cart/PaymentOptionMastercard";
import PaymentOptionSwish from "../components/Cart/PaymentOptionSwish";
import PaymentBasket from "../components/Cart/ShippingAdressForm";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderInformation from "../components/Cart/OrderInformation";
import { CSSProperties, useContext } from "react";
import { mockedProducts, Product } from "../products";
import { Footer } from "../components/Layout/Footer";
import { CartContext } from "../context/CartContext";
import { Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useBuy } from "../context/BuyContext";

export default function AccordionMenu() {
  const { buy, isLoading, submit } = useBuy();
  const cart = useContext(CartContext).cart;
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Shipping Address</Accordion.Header>
          <Accordion.Body>
            <PaymentBasket />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Payment options</Accordion.Header>
          <Accordion.Body>
            <PaymentOptionKlarna />
            <PaymentOptionMastercard />
            <PaymentOptionSwish />
            <Button variant="dark" type="submit" style={{ marginTop: "1rem" }}>
              Next
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Shipping options</Accordion.Header>
          <Accordion.Body>
            <ShippingOptions />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Your order</Accordion.Header>
          <Accordion.Body>
            {cart.map((cartItem) => (
              <div key={cartItem.product.id}>
                <p>
                  {cartItem.product.title} {cartItem.product.price}{" "}
                  {cartItem.product.valuta}
                </p>
              </div>
            ))}
            <div>
              Shipping: 40 SEK <br /> Total Price: 100 SEK
            </div>
            {/* <OrderInformation product={} /> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div style={confirmStyle}>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : buy ? (
          <span>
            {buy.paymentValid} <br /> {buy.confirmation}
          </span>
        ) : (
          <Button variant="dark" onClick={submit}>
            Confirm purchase
          </Button>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

const confirmStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "2rem",
  fontWeight: "bold",
  fontSize: "1.5rem",
  textAlign: "center",
};
