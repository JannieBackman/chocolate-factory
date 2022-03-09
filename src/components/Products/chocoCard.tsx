import { title } from "process";
import { CSSProperties, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaIdCardAlt } from "react-icons/fa";
import { text } from "stream/consumers";
import { Product } from "../../products";
import AmountCounter from "../AmountCounter";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

function ChocoCard({ product }: Props) {
  return (
    <Card border="dark" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={product.image} style={{ width: "20rem" }} />
      <Card.Body style={cardBody}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{product.text}</Card.Text>
          <Link to="/DetailsChocolate">
              <Button variant="primary">More info</Button>
          </Link>

        <AmountCounter />
      </Card.Body>
    </Card>
  );
}

const cardBody: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default ChocoCard;
