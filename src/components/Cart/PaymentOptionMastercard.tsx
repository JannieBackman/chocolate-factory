import "./PaymentOptions.css";
import { Form } from "react-bootstrap";

function PaymentOptionMastercard() {
  return (
    <div>
      <Form.Group
        className="mb-3"
        controlId="formGridCardNr"
        style={{ paddingLeft: "1rem", paddingTop: "1rem", width: "25%" }}
      >
        <Form.Label className="payment-label" for="frmCCNum">
          Card Number
        </Form.Label>
        <Form.Control
          required
          placeholder="Card number"
          name="cardnumber"
          id="frmCCNum"
          autoComplete="cc-number"
          className="payment-input"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a card number.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formGridCardExpDate"
        style={{ paddingLeft: "1rem", width: "25%" }}
      >
        <Form.Label className="payment-label" for="frmCCExp">
          Expiration Date
        </Form.Label>{" "}
        <br />
        <Form.Control
          placeholder="MM-YYYY"
          name="cc-exp"
          id="frmCCExp"
          required
          autoComplete="cc-exp"
          className="payment-input"
        />
        <Form.Control.Feedback type="invalid">
          Please provide an expiration date.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formGridCardExpDate"
        style={{ paddingLeft: "1rem", width: "25%" }}
      >
        <Form.Label className="payment-label" for="frmCCCVC">
          CVC
        </Form.Label>
        <Form.Control
          name="cvc"
          id="frmCCCVC"
          required
          autoComplete="cc-csc"
          placeholder="CVC"
          className="payment-input"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a CVC.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Enter your card information to pay using Mastercard.
        </Form.Text>
      </Form.Group>
    </div>
  );
}

export default PaymentOptionMastercard;
