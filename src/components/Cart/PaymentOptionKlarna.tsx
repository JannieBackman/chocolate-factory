import "./PaymentOptions.css";
import { Modal, Button, Form, Row } from "react-bootstrap";
import { useState } from "react";
import Klarna from "../../assets/klarna-logo.png";

function PaymentOptionKlarna() {
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
          <img className="img-style" src={Klarna} alt="" />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay with Klarna</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGridName">
              <div>
                <input type="radio" value="30days" name="pay-klarna" /> Pay
                within 30 days
              </div>
              <div>
                <input type="radio" value="now" name="pay-klarna" /> Pay now
              </div>
              <Form.Control
                type="personalnumber"
                placeholder="Personal number (YYMMDD-XXXX)"
              />
              <Form.Text className="text-muted">
                Enter your personal number to pay using Klarna.
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

export default PaymentOptionKlarna;
