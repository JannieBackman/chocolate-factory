import "./PaymentOptions.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Klarna from "../../assets/klarna-logo.png";

function PaymentOptionKlarna() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn btn-light" variant="primary" onClick={handleShow}>
        <img className="img-style" src={Klarna} alt="" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay with Klarna</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridPhone">
              <Form.Control type="" placeholder="Phone number" />
              <Form.Text className="text-muted">
                Enter your information to pay with Klarna.
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
