import { CSSProperties } from "react";
import DetailPage from "../DetailPage";
import "./Layout.css";
import ChocoCards from "../chocoCard";
import AmountCounter from "../AmountCounter";

function Main() {
  return (
    <div style={rootStyle}>
      <main
        className="MainContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <h3>Popular product</h3>
        <div>
          <ChocoCards />
          <AmountCounter />
        </div>
        <div>
          <ChocoCards />
          <AmountCounter />
        </div>
        <div>
          <ChocoCards />
          <AmountCounter />
        </div>
      </main>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default Main;
