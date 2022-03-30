import { CSSProperties, useContext } from "react";
import { FooterDetailPage } from "../components/Layout/Footer";
import { Product } from "../products";
import background from "../assets/Background.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

interface Props {
  product: Product;
}

export default function DetailsChocolate({ product }: Props) {
  let context = useContext(CartContext);
  return (
    <div style={detailsPage}>
      <h3>{product.title}</h3>
      <img src={product.image} alt="chocolate" style={{ width: "40rem" }} />
      <p>{product.text}</p>
      <Button
        style={buttonStyle}
        variant="dark"
        onClick={() => context.addToCart(product)}
      >
        Add to cart
      </Button>
      <Link to="/Chocolates">
        <Button variant="dark">Back</Button>
      </Link>
      <FooterDetailPage />
    </div>
  );
}

const detailsPage: CSSProperties = {
  display: "flex",
  alignItems: "center",
  margin: "0 0",
  flexDirection: "column",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  WebkitBackgroundSize: "cover",
  height: "100vh",
};

const buttonStyle: CSSProperties = {
  marginBottom: "1rem",
};
