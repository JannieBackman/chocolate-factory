import {Accordion, Col, Form, Modal, Row} from "react-bootstrap";
import ShippingOptions from "../components/Cart/ShippingOptions";
import PaymentOptionKlarna from "../components/Cart/PaymentOptionKlarna";
import PaymentOptionMastercard from "../components/Cart/PaymentOptionMastercard";
import PaymentOptionSwish from "../components/Cart/PaymentOptionSwish";
import PaymentBasket from "../components/Cart/ShippingAdressForm";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";
import {Button, Spinner} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useBuy} from "../context/BuyContext";
import BuyProvider from "../context/BuyContext";
import AmountCounter from "../components/AmountCounter";
import Postnord from "../assets/postnord-logo.png";
import DHL from "../assets/DHL-logo.png";
import Bring from "../assets/bring-logo.png";
import { Link } from "react-router-dom";


export default function AccordionMenu() {
    const {buy, isLoading, submit} = useBuy();
    let {cart, getTotalPrice} = useContext(CartContext);
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

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
            <h2>Shipping Address</h2>
            <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <PaymentBasket/>

                    <h2>Payment options</h2>
                    <Form>
                        <PaymentOptionKlarna/>
                        <PaymentOptionMastercard/>
                        <PaymentOptionSwish/>
                    </Form>

                    <div>
                        <h2>Shipping options</h2>
                        <div className="postnord-container">

                            <Form.Check
                                required
                                label="Choose shipping option"
                                feedback="You must choose a shipping option"
                                feedbackType="invalid"
                                name="shipping"
                                type="radio"
                            />
                            <img className="img-styling" src={Postnord} alt=""/>
                            <p className="shipping-info">
                                48h shipping time. Expected delivery on March 11.
                            </p>
                            <p className="shipping-info">
                                Shipping fee: {25} sek. Free if you shop for over 100sek.
                            </p>
                        </div>

                        <div className="dhl-container">
                            <Form.Check
                                required
                                label="Choose shipping option"
                                feedback="You must choose a shipping option"
                                feedbackType="invalid"
                                name="shipping"
                                type="radio"
                            />
                            <img className="img-styling" src={DHL} alt=""/>
                            <p className="shipping-info">
                                72h shipping time. Expected delivery on March 12.
                            </p>
                            <p className="shipping-info">Free shipping!</p>
                        </div>


                        <div className="bring-container">
                            <Form.Check
                                required
                                label="Choose shipping option"
                                feedback="You must choose a shipping option"
                                feedbackType="invalid"
                                name="shipping"
                                type="radio"
                            />
                            <img className="img-styling" src={Bring} alt=""/>
                            <p className="shipping-info">
                                24h shipping time. Expected delivery March 10.
                            </p>
                            <p className="shipping-info">Shipping fee: {40} sek.</p>
                        </div>
                        {/*<Link to="/OrderInformation">*/}
                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        {/*</Link>*/}

                    </div>

                    <h2>Your order</h2>
                    {cart.map((cartItem) => (
                        <div key={cartItem.product.id}>
                            <p>
                                {cartItem.product.title} {cartItem.product.price}{" "}
                                {cartItem.product.valuta}
                                <AmountCounter
                                    product={cartItem.product}
                                    quantity={cartItem.quantity}
                                />
                            </p>
                        </div>
                    ))}
                    <div>
                        Shipping: 25 SEK <br/> Total Price: {getTotalPrice()}:-
                    </div>
                  
      <div style={confirmStyle}>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : buy ? (
          <span>
            {buy.paymentValid} <br /> {buy.confirmation} <br />{" "}
            {buy.yourOrderNumber} {buy.orderNr}
            
          </span>
                        ) : (
                            <Button variant="dark" onClick={submit} type="submit">
                                Confirm purchase
                            </Button>
                        )}

                    </div>
                </Form>
                {
                }
            </div>
        </div>
    )
}
