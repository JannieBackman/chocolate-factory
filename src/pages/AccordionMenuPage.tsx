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
import { useBuy } from "../context/BuyContext";
import Submit from "./SubmitPurchase";
import ShippingOptions from "../components/Cart/ShippingOptions";

export default function AccordionMenu() {
  const cart = useContext(CartContext).cart;
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Your order</Accordion.Header>
          <Accordion.Body>
            {cart.map((product) => (
              <div>
                <p>
                  {product.title} {product.price} {product.valuta}
                </p>
              </div>
            ))}
            {/* <OrderInformation product={} /> */}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Shipping Address</Accordion.Header>
          <Accordion.Body>
            <PaymentBasket />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Payment options</Accordion.Header>
          <Accordion.Body>
            <PaymentOptionKlarna />
            <PaymentOptionMastercard />
            <PaymentOptionSwish />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Shipping options</Accordion.Header>
          <Accordion.Body>
            <ShippingOptions />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Footer /> */}
    </div>
  );
}
