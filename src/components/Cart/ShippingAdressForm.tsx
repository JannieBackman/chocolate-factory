import React, { CSSProperties, useContext, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./ShippingOptions.css";
import { CartContext, CustomerInfo } from "../../context/CartContext";

interface Props {
  setCustomer: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  customer: CustomerInfo;
}

export default function PaymentBasket({ setCustomer, customer }: Props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = () => {
    // console.log("inne i submit")
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // setValidated(true);
  };

  return (
    <div>
      <div className="paymentContainer" style={paymentContainer}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              required
              type="name"
              value={customer.firstname}
              placeholder="Firstname"
              name="firstname"
              onChange={(event) =>
                setCustomer({ ...customer, firstname: event.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a firstname.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              required
              type="lastname"
              placeholder="Lastname"
              name="lastname"
              onChange={(event) =>
                setCustomer({ ...customer, lastname: event.target.value })
              }
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
              onChange={(event) =>
                setCustomer({ ...customer, address: event.target.value })
              }
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
              onChange={(event) =>
                setCustomer({ ...customer, city: event.target.value })
              }
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
              onChange={(event) =>
                setCustomer({ ...customer, zip: event.target.value })
              }
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
              onChange={(event) =>
                setCustomer({ ...customer, phoneNumber: event.target.value })
              }
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
              onChange={(event) =>
                setCustomer({ ...customer, email: event.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide an email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </div>
  );
}

const paymentContainer: CSSProperties = {
  padding: "1rem 1rem 0 1rem",
};
