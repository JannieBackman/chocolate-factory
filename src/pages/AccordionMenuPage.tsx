import { Form } from "react-bootstrap";
import "../components/Cart/ShippingOptions.css";
import "../components/Layout/Layout.css";
import PaymentOptionKlarna from "../components/Cart/PaymentOptionKlarna";
import PaymentOptionMastercard from "../components/Cart/PaymentOptionMastercard";
import PaymentOptionSwish from "../components/Cart/PaymentOptionSwish";
import PaymentBasket from "../components/Cart/ShippingAdressForm";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useBuy } from "../context/BuyContext";
import AmountCounter from "../components/AmountCounter";
import Postnord from "../assets/postnord-logo.png";
import DHL from "../assets/DHL-logo.png";
import Bring from "../assets/bring-logo.png";
import { Link } from "react-router-dom";
import Klarna from "../assets/klarna-logo.png";
import Mastercard from "../assets/Mastercard-logo.png";
import Swish from "../assets/swish-logo.png";

interface Payment {
  swish: string;
  klarna: string;
  mastercard: string;
}

export default function AccordionMenu() {
  const { buy, isLoading, submit } = useBuy();
  let { cart, getTotalPrice } = useContext(CartContext);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      submit();
      event.preventDefault();
    }

    setValidated(true);
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setChecked(!checked);
  };

  <></>;

  let mastercard: JSX.Element = (
    <div className="payment-button-container">
      <Form.Check
        required
        label="Choose payment option"
        feedback="You must choose a shipping option"
        feedbackType="invalid"
        name="payment"
        type="radio"
        onClick={() => handleShow()}
        checked={checked}
        onChange={handleChange}
      />
      <Button className="btn btn-light" variant="primary">
        <img className="img-style" src={Mastercard} alt="" />
      </Button>
      <PaymentOptionMastercard />
    </div>
  );

  let swish: JSX.Element = (
    <div className="payment-button-container">
      <Form.Check
        required
        label="Choose payment option"
        feedback="You must choose a shipping option"
        feedbackType="invalid"
        name="payment"
        type="radio"
      />
      <Button className="btn btn-light" variant="primary" active>
        <img className="img-style" src={Swish} alt="" />
      </Button>
      <PaymentOptionSwish />
    </div>
  );

  let klarna: JSX.Element = (
    <div className="payment-button-container">
      <Form.Check
        required
        label="Choose payment option"
        feedback="You must choose a shipping option"
        feedbackType="invalid"
        name="payment"
        type="radio"
        onClick={handleShow}
      />
      <Button className="btn btn-light" variant="primary">
        <img className="img-style" src={Klarna} alt="" />
      </Button>
      <PaymentOptionKlarna />
    </div>
  );

  let paymentMethod;
  return paymentMethod === "swish"
    ? swish
    : paymentMethod === "klarna"
    ? klarna
    : paymentMethod === "mastercard"
    ? mastercard
    : null;

  // return (
  //   <div>
  // <div>
  //           <h2 className="paymentPageTitle">Shipping options</h2>
  //           <div className="postnord-container">
  //             <Form.Check
  //               required
  //               label="Choose shipping option"
  //               feedback="You must choose a shipping option"
  //               feedbackType="invalid"
  //               name="shipping"
  //               type="radio"
  //             />
  //             <img className="img-styling" src={Postnord} alt="" />
  //             <p className="shipping-info">
  //               48h shipping time. Expected delivery on March 11.
  //             </p>
  //             <p className="shipping-info">
  //               Shipping fee: {25} sek. Free if you shop for over 100sek.
  //             </p>
  //           </div>

  //           <div className="dhl-container">
  //             <Form.Check
  //               required
  //               label="Choose shipping option"
  //               feedback="You must choose a shipping option"
  //               feedbackType="invalid"
  //               name="shipping"
  //               type="radio"
  //             />
  //             <img className="img-styling" src={DHL} alt="" />
  //             <p className="shipping-info">
  //               72h shipping time. Expected delivery on March 12.
  //             </p>
  //             <p className="shipping-info">Free shipping!</p>
  //           </div>

  //           <div className="bring-container">
  //             <Form.Check
  //               required
  //               label="Choose shipping option"
  //               feedback="You must choose a shipping option"
  //               feedbackType="invalid"
  //               name="shipping"
  //               type="radio"
  //             />
  //             <img className="img-styling" src={Bring} alt="" />
  //             <p className="shipping-info">
  //               24h shipping time. Expected delivery March 10.
  //             </p>
  //             <p className="shipping-info">Shipping fee: {40} sek.</p>
  //           </div>
  //           {/* <Link to="/OrderInformation"> */}
  //           <Button variant="dark" type="submit">
  //             Confirm purchase
  //           </Button>
  //           {/* </Link> */}
  //         </div>

  //         <h2 className="paymentPageTitle">Your order</h2>
  //         {cart.map((cartItem) => (
  //           <div key={cartItem.product.id}>
  //             <p>
  //               {cartItem.product.title} {cartItem.product.price}{" "}
  //               {cartItem.product.valuta}
  //               <AmountCounter
  //                 product={cartItem.product}
  //                 quantity={cartItem.quantity}
  //               />
  //             </p>
  //           </div>
  //         ))}
  //         <div>
  //           Shipping: 25 SEK <br /> Total Price: {getTotalPrice()}:-
  //         </div>
  //         {/* <div> */}
  //         <div>
  //           {isLoading ? (
  //             <Spinner animation="border" role="status">
  //               <span className="visually-hidden">Loading...</span>
  //             </Spinner>
  //           ) : buy ? (
  //             <span>
  //               {buy.paymentValid} <br /> {buy.confirmation} <br />{" "}
  //               {buy.yourOrderNumber} {buy.orderNr}
  //             </span>
  //           ) : undefined}
  //         </div>
  //       {}
  //     </div>
  //   </div>

  // );
}
