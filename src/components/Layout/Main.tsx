import { CSSProperties } from "react";
import DetailPage from "../DetailPage";
import "./Layout.css";
import ChocoCard from "../Products/chocoCard";
import { mockedProducts } from "../../products";
import AmountCounter from "../AmountCounter";

function Main() {
  return (
    <div style={rootStyle}>
      <main className="MainContainer">
        <h3 style={pageTitle}>Popular product</h3>
        <div style={{ display: "flex" }}>
          <ChocoCard product={mockedProducts[4]} />
          <ChocoCard product={mockedProducts[1]} />
          <ChocoCard product={mockedProducts[3]} />
        </div>
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
export default Main;
