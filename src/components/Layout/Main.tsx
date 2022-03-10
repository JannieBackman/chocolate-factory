import { CSSProperties } from "react";

import "./Layout.css";
import ChocoCard from "../Products/chocoCard";
import { mockedProducts } from "../../products";
import AmountCounter from "../AmountCounter";
import { Container, Row, Col } from "react-bootstrap";

function Main() {
  return (
    <div style={rootStyle}>
      <main className="MainContainer">
        <h3 style={pageTitle}>Popular product</h3>
        <Container>
          <Row>
            <Col>
              <div style={productPageCards}>
                <ChocoCard product={mockedProducts[4]} />
                <ChocoCard product={mockedProducts[1]} />
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
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
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
