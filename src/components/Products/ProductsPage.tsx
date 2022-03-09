import { Link } from "react-router-dom";
import React, { CSSProperties } from "react";
import ChocoCard from "./chocoCard";
import { mockedProducts } from "../../products";
import { Container, Row, Col } from "react-bootstrap";

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
    </div>
  );
}

const productsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "2rem",
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
