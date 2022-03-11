import "./PaymentOptions.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Mastercard from "../../assets/Mastercard-logo.png";

function PaymentOptionMastercard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGridCardNr">
              <Form.Control required type="" placeholder="Card number" />
              <Form.Control.Feedback type="invalid">
                Please provide a card number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridCardExpDate">
              <input required type="date" />
              <Form.Control.Feedback type="invalid">
                Please provide an expiration date.
              </Form.Control.Feedback>
              <Form.Text className="text-muted"> Expiration date</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridCardExpDate">
              <Form.Control required type="" placeholder="CVC" />
              <Form.Control.Feedback type="invalid">
                Please provide a CVC.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Enter your card information to pay using Mastercard.
              </Form.Text>
            </Form.Group>
          </Form>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="margin-left"
            type="submit"
            variant="primary"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentOptionMastercard;
