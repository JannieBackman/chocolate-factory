import React, { CSSProperties } from "react";
import ChocoCard from "../components/Products/ProductCard";
import { mockedProducts } from "../products";
import { Container, Row, Col } from "react-bootstrap";
import { FooterProductPage } from "../components/Layout/Footer";

export default function Chocolates() {
  return (
    <div style={productsContainer}>
      <h3 style={productPageTitle}>Products</h3>
      <Container>
        <Row>
          <Col>
            <div style={productPageCards}>
              {mockedProducts.map((product) => (
                <ChocoCard product={product} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <FooterProductPage />
    </div>
  );
}

const productsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const productPageTitle: CSSProperties = {
  textAlign: "center",
};

const productPageCards: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
};
