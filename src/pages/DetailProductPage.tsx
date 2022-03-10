import React, { CSSProperties } from "react";
import { Footer } from "../components/Layout/Footer";
import ChocoCard from "../components/Products/ProductCard";
import { mockedProducts, Product } from "../products";
import background from "../assets/background_chocolateFactory.jpg";

interface Props {
  product: Product;
}

export default function DetailsChocolate({ product }: Props) {
  return (
    <div style={detailsPage}>
      <h3>{product.title}</h3>
      <img src={product.image} alt="chocolate" style={{ width: "20rem" }} />
      <p>{product.text}</p>
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
  height: "100vh",
};
