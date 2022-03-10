import { Accordion } from "react-bootstrap";
import ShippingOptions from "../Cart/ShippingOptions";
import PaymentOptionKlarna from "../Cart/PaymentOptionKlarna";
import PaymentOptionMastercard from "../Cart/PaymentOptionMastercard";
import PaymentOptionSwish from "../Cart/PaymentOptionSwish";
import PaymentBasket from "../Cart/ShippingAdressForm";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderInformation from "../Cart/OrderInformation";
import { CSSProperties } from "react";

export default function AccordionMenu() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Your order</Accordion.Header>
          <Accordion.Body>
            <OrderInformation />
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
    </div>
  );
}
