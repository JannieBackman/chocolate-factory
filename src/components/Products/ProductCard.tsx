import { CSSProperties } from "react";
import { Button, Card } from "react-bootstrap";
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
          <Button style={infoBtn} variant="dark">
            More info
          </Button>
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

const infoBtn: CSSProperties = {
  marginBottom: "1rem",
};

export default ChocoCard;
