import { Form } from "react-bootstrap";
import "../components/Cart/ShippingOptions.css";
import "../components/Layout/Layout.css";
import "./pages.css";
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
import Klarna from "../assets/klarna-logo.png";
import Mastercard from "../assets/Mastercard-logo.png";
import Swish from "../assets/swish-logo.png";
import ShippingOptions from "../components/Cart/ShippingOptions";

export default function AccordionMenu() {
  const { buy, isLoading, submit } = useBuy();
  let { cart, getTotalPrice, getMoms, emptyCartOnSubmit } =
    useContext(CartContext);
  const [validated, setValidated] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("Swish");

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;

    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      submit();
      event.preventDefault();
      emptyCartOnSubmit();
    }

    setValidated(true);
  };

  const handleChange = (event: any) => {
    // const name = event.target.name;
    // const value =
    //   event.target.type === "checkbox"
    //     ? event.target.checked
    //     : event.target.value;
    // setChecked(!checked);
    setPaymentMethod(event);
    console.log(paymentMethod);
  };

  let mastercard: JSX.Element = <PaymentOptionMastercard />;

  let swish: JSX.Element = <PaymentOptionSwish />;

  let klarna: JSX.Element = <PaymentOptionKlarna />;

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2 className="paymentPageTitle">Shipping address</h2>
        <PaymentBasket />

        <h2 className="paymentPageTitle">Payment method</h2>
        <div className="payment-button-container">
          <Form.Check
            required
            label="Choose payment option"
            feedback="You must choose a payment option"
            feedbackType="invalid"
            name="payment"
            type="radio"
            onChange={() => handleChange("Mastercard")}
          />
          <Button className="btn btn-light" variant="primary">
            <img className="img-style" src={Mastercard} alt="" />
          </Button>
        </div>

        <div className="payment-button-container">
          <Form.Check
            required
            label="Choose payment option"
            feedback="You must choose a payment option"
            feedbackType="invalid"
            name="payment"
            type="radio"
            onChange={() => handleChange("Klarna")}
          />
          <Button className="btn btn-light" variant="primary">
            <img className="img-style" src={Klarna} alt="" />
          </Button>
        </div>

        <div className="payment-button-container">
          <Form.Check
            required
            label="Choose payment option"
            feedback="You must choose a payment option"
            feedbackType="invalid"
            name="payment"
            type="radio"
            defaultChecked
            onChange={() => handleChange("Swish")}
          />
          <Button className="btn btn-light" variant="primary" active>
            <img className="img-style" src={Swish} alt="" />
          </Button>
        </div>

        {paymentMethod === "Mastercard" && mastercard}
        {paymentMethod === "Swish" && swish}
        {paymentMethod === "Klarna" && klarna}
        <h2 className="paymentPageTitle">Shipping method</h2>
        <ShippingOptions />

        <h2 className="paymentPageTitle">Your order</h2>
        {cart.map((cartItem) => (
          <div key={cartItem.product.id}>
            <p>
              {cartItem.product.image} {cartItem.product.title}{" "}
              {cartItem.product.price} {cartItem.product.valuta}
              <AmountCounter
                product={cartItem.product}
                quantity={cartItem.quantity}
              />
            </p>
          </div>
        ))}

        <div className="orderInfo">
          Shipping: {25}:- <br /> Moms: {getMoms()}:- <br /> Total price:{" "}
          {getTotalPrice()}
          :-
        </div>
        <Button className="confirmBtn" variant="dark" type="submit">
          Confirm purchase
        </Button>
        {/* <div> */}
        <div className="conformationInfo">
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : buy ? (
            <span>
              {buy.paymentValid} <br /> {buy.confirmation} <br />{" "}
              {buy.yourOrderNumber} {buy.orderNr}
            </span>
          ) : undefined}
        </div>
      </Form>
    </div>
  );
}
