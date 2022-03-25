import "./ShippingOptions.css";
import Postnord from "../../assets/postnord-logo.png";
import DHL from "../../assets/DHL-logo.png";
import Bring from "../../assets/bring-logo.png";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useBuy } from "../../context/BuyContext";
import { Buy, fakeFetch } from "../../components/fakeFetch";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ShippingOptions() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="shipping-container">
      <div className="postnord-container">
        <Form.Check
          required
          label="Choose shipping option"
          feedback="You must choose a shipping option"
          feedbackType="invalid"
          name="shipping"
          type="radio"
        />
        <img className="img-styling" src={Postnord} alt="" />
        <p className="shipping-info">
          48h shipping time. Expected delivery on March 11.
        </p>
        <p className="shipping-info">
          Shipping fee: 25 sek. Free if you shop for over 100sek.
        </p>
      </div>
      <div className="dhl-container">
        <Form.Check
          required
          label="Choose shipping option"
          feedback="You must choose a shipping option"
          feedbackType="invalid"
          name="shipping"
          type="radio"
        />
        <img className="img-styling" src={DHL} alt="" />
        <p className="shipping-info">
          72h shipping time. Expected delivery on March 12.
        </p>
        <p className="shipping-info">Free shipping!</p>
      </div>
      <div className="bring-container">
        <Form.Check
          required
          label="Choose shipping option"
          feedback="You must choose a shipping option"
          feedbackType="invalid"
          name="shipping"
          type="radio"
        />
        <img className="img-styling" src={Bring} alt="" />
        <p className="shipping-info">
          24h shipping time. Expected delivery March 10.
        </p>
        <p className="shipping-info">Shipping fee: {40} sek.</p>
      </div>
    </div>
  );
}

export default ShippingOptions;
