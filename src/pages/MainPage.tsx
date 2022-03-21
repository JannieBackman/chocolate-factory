import { CSSProperties } from "react";

import "../components/Layout/Layout.css";
import { Props } from "../components/Products/ProductCard";
import ChocoCard from "../components/Products/ProductCard";
import { mockedProducts } from "../products";
import AmountCounter from "../components/AmountCounter";
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../components/Layout/Footer";
import background from "../assets/Background.jpg";

function Main() {
  return (
    <div style={rootStyle}>
      <main className="MainContainer">
        <h3 style={pageTitle}>Popular products</h3>
        <Container>
          <Row>
            <Col>
              <div style={productPageCards}>
                <ChocoCard product={mockedProducts[1]} />
                <ChocoCard product={mockedProducts[2]} />
                <ChocoCard product={mockedProducts[3]} />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <div style={pageStyle}>
        <h2>About Chocolate Factory</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          necessitatibus quod, ipsum, delectus ex, atque quasi placeat deleniti
          <br />
          quidem maxime repellendus doloribus vero cumque voluptatibus numquam.
          Voluptas dolorum ratione adipisci!
        </p>
      </div>
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  WebkitBackgroundSize: "cover",
};

const pageTitle: CSSProperties = {
  textAlign: "center",
};
const pageStyle: CSSProperties = {
  textAlign: "center",
  padding: "1rem",
};
const productPageCards: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
};

export default Main;
