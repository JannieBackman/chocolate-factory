import React, { useContext } from "react";
import AmountCounter from "../AmountCounter";
import { ListGroup } from "react-bootstrap";
import { mockedProducts, Product } from "../../products";

interface Props {
  product: Product;
}

export default function OrderInformation({ product }: Props) {
  return (
    <div>
      <h2>Your order</h2>
      <p> Items in cart</p>
      <p>Total price: </p>
      <ListGroup>
        <ListGroup.Item>
          <div style={{ display: "flex" }}>
            {product.title}
            <AmountCounter />
          </div>
          <div style={{ display: "flex" }}>
            {product.title}
            <AmountCounter />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
