import React from "react";
import AmountCounter from "../AmountCounter";
import {ListGroup} from "react-bootstrap";


export default function OrderInformation() {
    return (
        <div>
            <h2>Your order</h2>
            <ListGroup>
            <ListGroup.Item>
                Item 1
                <AmountCounter/>
            </ListGroup.Item>
            </ListGroup>
        </div>
    )
}