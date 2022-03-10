import React, { CSSProperties, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function PaymentBasket() {
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
    <div>
      <div style={paymentContainer}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Firstname</Form.Label>
              <Form.Control required type="name" placeholder="Firstname" />
              <Form.Control.Feedback type="invalid">
                Please provide a firstname.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control required type="lastname" placeholder="Lastname" />
              <Form.Control.Feedback type="invalid">
                Please provide a lastname.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control required placeholder="Address" />
              <Form.Control.Feedback type="invalid">
                Please provide an adress.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control required placeholder="City" />
              <Form.Control.Feedback type="invalid">
                Please provide a city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control required placeholder="Zip" />
              <Form.Control.Feedback type="invalid">
                Please provide a zip code.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control required placeholder="Phone number" />
              <Form.Control.Feedback type="invalid">
                Please provide a phone number.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required placeholder="Email" />
              <Form.Control.Feedback type="invalid">
                Please provide an email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
             <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>

        </Form>
      </div>
    </div>
  );
}
const cartStyle: CSSProperties = {
  fontSize: "2rem",
  marginLeft: "2rem",
};

const basketBtn: CSSProperties = {
  height: "2rem",
  width: "6rem",
  margin: "0 0 1rem 2rem",
};

const basketContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const paymentContainer: CSSProperties = {
  padding: "1rem 1rem 0 1rem",
};
