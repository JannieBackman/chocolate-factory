import React, { CSSProperties } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function PaymentBasket() {
  return (
      <div>
        <div style={paymentContainer}>

          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="name" placeholder="Firstname"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="lastname" placeholder="Lastname"/>
              </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address"/>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="City"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control placeholder="Zip"/>
            </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control placeholder="Phone number"/>
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Email"/>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </div>
      </div>
  );
}
const cartStyle: CSSProperties = {
    fontSize: "2rem",
    marginLeft: "2rem"

}

const basketBtn: CSSProperties = {
    height: "2rem",
    width: "6rem",
    margin: "0 0 1rem 2rem"
}

const basketContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"

}

const paymentContainer: CSSProperties = {
  padding: "1rem 1rem 0 1rem",
}






