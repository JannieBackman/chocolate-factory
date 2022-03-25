import React, {CSSProperties, useContext, useState} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./ShippingOptions.css";
import {CartContext} from "../../context/CartContext";


export default function PaymentBasket() {
  const [validated, setValidated] = useState(false);
  let { printForm } = useContext(CartContext);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [form, setFormValue] = useState('')

    const changeHandler = (event: any) => {
      setFormValue(event.target.value)
      console.log(event.target.value)
    }

  return (
    <div>
      <div className="paymentContainer" style={paymentContainer}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Firstname</Form.Label>
            <Form.Control required
                          type="name"
                          value={form}
                          placeholder="Firstname"
                          name="firstname"
                          onChange={changeHandler}
            />
              <Form.Control.Feedback type="invalid">
              Please provide a firstname.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control required
                          type="lastname"

                          placeholder="Lastname"
                          name="lastname"
                          onChange={changeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a lastname.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
                required
                placeholder="Address"
                name="address"

                onChange={changeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please provide an adress.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
                required
                placeholder="City"
                name="city"

                onChange={changeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
                required
                placeholder="Zip"
                name="zip"

                onChange={changeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a zip code.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
                required
                placeholder="Phone number"
                name="phoneNumber"

                onChange={changeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a phone number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required
                placeholder="Email"
                name="email"

                onChange={changeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please provide an email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button>click {}</Button>
      </div>
    </div>
  );
}


const paymentContainer: CSSProperties = {
  padding: "1rem 1rem 0 1rem",
};
