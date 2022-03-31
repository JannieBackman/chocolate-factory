import "./PaymentOptions.css";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

interface Props {
  phoneNumber: string;
}

// Form for payment with swish
function PaymentOptionSwish({ phoneNumber }: Props) {
  let { form } = useContext(CartContext);
  return (
    <div>
      {console.log(form)}
      <Form.Group
        className="mb-3"
        controlId="formGridPhone"
        style={{ padding: "1rem", width: "25%" }}
      >
        <Form.Label className="payment-label">Phone Number</Form.Label>
        <Form.Control
          required
          type="phone number"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={() => {}}
          className="payment-input"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a phone number.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Enter your phone number to pay with Swish.
        </Form.Text>
      </Form.Group>
    </div>
  );
}

export default PaymentOptionSwish;
