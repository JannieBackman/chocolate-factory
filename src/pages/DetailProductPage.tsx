import { CSSProperties } from "react";
import { FooterDetailPage } from "../components/Layout/Footer";
import { Product } from "../products";
import background from "../assets/Background.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function DetailsChocolate({ product }: Props) {
  return (
    <div style={detailsPage}>
      <h3>{product.title}</h3>
      <img src={product.image} alt="chocolate" style={{ width: "40rem" }} />
      <p>{product.text}</p>
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
