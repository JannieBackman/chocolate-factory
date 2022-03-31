import "./PaymentOptions.css";
import { Form } from "react-bootstrap";

// Form for payment with klarna
function PaymentOptionKlarna() {
  return (
    <div>
      <Form.Group
        controlId="formGridName"
        style={{ padding: "1rem", width: "25%" }}
      >
        <Form.Label className="payment-label">Personal Number</Form.Label>
        <Form.Control
          required
          type="personalnumber"
          placeholder="(YYMMDD-XXXX)"
          className="payment-input"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a personal number.
        </Form.Control.Feedback>

        <Form.Text className="text-muted">
          Enter your personal number to pay using Klarna.
        </Form.Text>
      </Form.Group>
    </div>
  );
}

export default PaymentOptionKlarna;
