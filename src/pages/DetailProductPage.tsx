import React, { CSSProperties } from "react";
import { Footer } from "../components/Layout/Footer";
import ChocoCard from "../components/Products/ProductCard";
import { mockedProducts, Product } from "../products";
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
      <Footer />
    </div>
  );
}

const detailsPage: CSSProperties = {
  display: "flex",
  alignItems: "center",
  margin: "2rem 0",
  flexDirection: "column",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  WebkitBackgroundSize: "cover",
  height: "100vh",
};
