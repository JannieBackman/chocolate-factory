import React, {useContext} from "react";
import AmountCounter from "../AmountCounter";
import {ListGroup, Spinner} from "react-bootstrap";
import {mockedProducts, Product} from "../../products";
import {Button} from "react-bootstrap";
import {CartContext} from "../../context/CartContext";
import {useBuy} from "../../context/BuyContext";


export default function OrderInformation() {
    const {buy, isLoading} = useBuy();
    let {cart, getTotalPrice} = useContext(CartContext);
    return (
        <div>
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
            <div>
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
                    <Button variant="dark" type="submit">
                        Confirm purchase
                    </Button>
                )}

            </div>
        </div>
    )
}
