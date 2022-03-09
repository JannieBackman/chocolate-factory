import "./PaymentOptions.css";
import Swish from "../../assets/swish-logo.png";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function PaymentOptionSwish() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="payment-button-container">
        <Button
          className="btn btn-light"
          variant="primary"
          onClick={handleShow}
        >
          <img className="img-style" src={Swish} alt="" />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay with Swish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridPhone">
              <Form.Control type="" placeholder="Phone number" />
              <Form.Text className="text-muted">
                Enter your phone number to pay using Swish.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentOptionSwish;
