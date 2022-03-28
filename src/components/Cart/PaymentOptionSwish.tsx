import "./PaymentOptions.css";
import Swish from "../../assets/swish-logo.png";
import { Modal, Button, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CustomerInfo } from "../../context/CartContext";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import { setFlagsFromString } from "v8";

interface Props {
  phoneNumber: string;
}

function PaymentOptionSwish({ phoneNumber }: Props) {
  let { form } = useContext(CartContext);

  // const customertest: CustomerInfo = {
  //   firstname: "",
  //   lastname: "",
  //   address: "",
  //   city: "",
  //   zip: "",
  //   phoneNumber: "",
  //   email: "",
  // };
  const [show, setShow] = useState(false);

  // const [checked, setChecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event: any) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  // const handleChange = (event: any) => {
  //   // const name = event.target.name;
  //   // const value =
  //   //   event.target.type === "checkbox"
  //   //     ? event.target.checked
  //   //     : event.target.value;
  //   setChecked(!checked);
  // };

  // if (checked === false) {
  //   return (

  //   );
  // } else {
  return (
    <div>
      {console.log(form)}
      <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Control
          required
          type="phone number"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={() => {}}
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

export default PaymentOptionSwish;
