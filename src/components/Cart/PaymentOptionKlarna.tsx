import "./PaymentOptions.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Klarna from "../../assets/klarna-logo.png";

function PaymentOptionKlarna() {
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
          <img className="img-style" src={Klarna} alt="" />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay with Klarna</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formGridName">
              <div>
                <input
                  defaultChecked
                  type="radio"
                  value="30days"
                  name="pay-klarna"
                />{" "}
                Pay within 30 days
              </div>
              <div>
                <input type="radio" value="now" name="pay-klarna" /> Pay now
              </div>
              <Form.Control
                required
                type="personalnumber"
                placeholder="Personal number (YYMMDD-XXXX)"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a personal number.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Enter your personal number to pay using Klarna.
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
        {/* <Modal.Footer> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default PaymentOptionKlarna;
