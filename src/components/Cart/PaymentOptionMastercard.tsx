import "./PaymentOptions.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Mastercard from "../../assets/Mastercard-logo.png";

function PaymentOptionMastercard() {
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
          <img className="img-style" src={Mastercard} alt="" />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay with Mastercard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridCardNr">
              <Form.Control type="" placeholder="Card number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridCardExpDate">
              <input type="date" />
              <Form.Text className="text-muted"> Expiration date</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridCardExpDate">
              <Form.Control type="" placeholder="CVC" />
              <Form.Text className="text-muted">
                Enter your card information to pay using Mastercard.
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

export default PaymentOptionMastercard;
