import "./PaymentOptions.css";
import Swish from "../../assets/swish-logo.png";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function PaymentOptionSwish() {
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
          active
        >
          <img className="img-style" src={Swish} alt="" />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay with Swish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGridPhone">
              <Form.Control.Feedback type="invalid">
                Please provide a phone number.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Enter your phone number to pay using Swish.
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

export default PaymentOptionSwish;
