import { Link } from "react-router-dom";
import React, { CSSProperties } from "react";
import ChocoCard from "./chocoCard";
import { mockedProducts } from "../../products";

export default function Chocolates() {
  return (
    <div style={productsContainer}>
      <h3 style={productPageTitle}>Products</h3>
      <div style={productPageCards}>
        {mockedProducts.map((product) => (
          <ChocoCard product={product} />
        ))}
      </div>
    </div>
  );
}

const productsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
    marginBottom: "2rem"
};

const productPageTitle: CSSProperties = {
  textAlign: "center",
};

const productPageCards: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1rem",
};
