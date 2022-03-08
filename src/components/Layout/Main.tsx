import { CSSProperties } from "react";
import DetailPage from "../DetailPage";
import "./Layout.css";
import ChocoCard from "../Products/chocoCard";
import {mockedProducts} from "../../products";

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
          <ChocoCard product={mockedProducts[4]} />
        </div>
        <div>
          <ChocoCard product={mockedProducts[2]} />
        </div>
        <div>
          <ChocoCard product={mockedProducts[3]} />
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
