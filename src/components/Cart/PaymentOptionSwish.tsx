import "./PaymentOptions.css";
import Swish from "../../assets/swish-logo.png";
import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";

function PaymentOptionSwish() {
  const [show, setShow] = useState(false);

  const [checked, setChecked] = useState(false);

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

  const handleChange = (event: any) => {
    // const name = event.target.name;
    // const value =
    //   event.target.type === "checkbox"
    //     ? event.target.checked
    //     : event.target.value;
    setChecked(!checked);
  };

  if (checked === false) {
    return (
      <div className="payment-button-container">
        <Form.Check
          required
          label="Choose payment option"
          feedback="You must choose a shipping option"
          feedbackType="invalid"
          name="payment"
          type="radio"
          onChange={handleChange}
        />
        <Button
          className="btn btn-light"
          variant="primary"
          onClick={handleShow}
          active
        >
          <img className="img-style" src={Swish} alt="" />
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Form
          name="paymentform"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formGridPhone">
            <Form.Control
              required
              type="personalnumber"
              placeholder="Phone number"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a phone number.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              Enter your phone number to pay with Swish.
            </Form.Text>
          </Form.Group>
        </Form>
        <Button variant="secondary" onClick={handleChange}>
          Close
        </Button>
      </div>
    );
  }

  // return (
  //   <>
  //     <div className="payment-button-container">
  //       <Form.Check
  //         required
  //         label="Choose payment option"
  //         feedback="You must choose a shipping option"
  //         feedbackType="invalid"
  //         name="payment"
  //         type="radio"
  //       />
  //       <Button
  //         className="btn btn-light"
  //         variant="primary"
  //         onClick={handleShow}
  //         active
  //       >
  //         <img className="img-style" src={Swish} alt="" />
  //       </Button>
  //     </div>

  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Pay with Swish</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Form noValidate validated={validated} onSubmit={handleSubmit}>
  //           <Form.Group className="mb-3" controlId="formGridPhone">
  //             <Form.Control
  //               required
  //               type="personalnumber"
  //               placeholder="Phone number"
  //             />
  //             <Form.Control.Feedback type="invalid">
  //               Please provide a phone number.
  //             </Form.Control.Feedback>
  //             <Form.Text className="text-muted">
  //               Enter your phone number to pay with Swish.
  //             </Form.Text>
  //           </Form.Group>
  //         </Form>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //         <Button
  //           className="margin-left"
  //           type="submit"
  //           variant="primary"
  //           onClick={handleSubmit}
  //         >
  //           Save
  //         </Button>
  //       </Modal.Body>
  //     </Modal>
  //   </>
  // );
}

export default PaymentOptionSwish;
