import React from "react";
import {ListGroup} from "react-bootstrap";

export default function Checkout() {
    return (
        <div>
            <p>Thanks for your order!</p>
            <ListGroup>
            <ListGroup.Item>Item 1</ListGroup.Item>
            </ListGroup>
            <p>Will be delivered on "" by "".</p>
        </div>
    )
}