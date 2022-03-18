import React, { useContext } from "react";
import AmountCounter from "../AmountCounter";
import { ListGroup } from "react-bootstrap";
import { mockedProducts, Product } from "../../products";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

interface Props {
  product: Product;
}

export default function OrderInformation({ product }: Props) {
  let context = useContext(CartContext);

  const newArray = context.cart;
  const productList = newArray.map((newArray) => (
    <ListGroup>
      <ListGroup.Item>
        <div style={{ display: "flex" }}>
          {product.title}
          {/* <AmountCounter /> */}
        </div>
        <h2>Your order</h2>
        <p> Items in cart</p>
        <p>Total price: </p>
        <div>
          <Button
            onClick={() => context.removeFromCart(1)}
            variant="dark"
            type="submit"
          >
            Remove from cart
          </Button>
        </div>
        <div style={{ display: "flex" }}>
          {product.title}
          {/* <AmountCounter /> */}
        </div>
      </ListGroup.Item>
    </ListGroup>
  ));
}
