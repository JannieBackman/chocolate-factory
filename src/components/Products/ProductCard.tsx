import { CSSProperties, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "../../products";
import AmountCounter from "../AmountCounter";
import { Link } from "react-router-dom";
import Cart from "../Cart/cartIcon";
import { CartContext } from "../../context/CartContext";

export interface Props {
  product: Product;
  handleAddToCart: () => void;
}

function ChocoCard({ product }: Props) {
  let context = useContext(CartContext);
  context.cart[0].title;
  return (
    <Card border="dark" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "19.9rem" }}
      />
      <Card.Body style={cardBody}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{product.text}</Card.Text>
        <Link to="/DetailsChocolate">
          <Button style={infoBtn} variant="dark">
            More info
          </Button>
        </Link>

        <Card.Subtitle style={{ paddingBottom: "1rem" }}>
          {product.price} {product.valuta}
        </Card.Subtitle>
        <Button onClick={() => handleAddToCart()} variant="dark">
          Add to Cart
        </Button>
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
function handleAddToCart(): void {
  throw new Error("Function not implemented.");
}
