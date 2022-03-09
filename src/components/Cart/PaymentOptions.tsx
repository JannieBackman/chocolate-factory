import "./PaymentOptions.css";
import Swish from "../../assets/swish-logo.png";
import Klarna from "../../assets/klarna-logo.png";
import Mastercard from "../../assets/Mastercard-logo.png";
import { Form, Row, Col, Button } from "react-bootstrap";

function PaymentOptions() {
  return (
    <div className="payment-container">
      <div>
        <input type="radio" value="swish" name="payment" />
        <img className="img-style" src={Swish} alt="" />
        <Form></Form>
      </div>
      <div>
        <input type="radio" value="klarna" name="payment" />
        <img className="img-style" src={Klarna} alt="" />
      </div>
      <div>
        <input type="radio" value="mastercard" name="payment" />
        <img className="img-style" src={Mastercard} alt="" />
      </div>
    </div>
  );
}

export default PaymentOptions;
