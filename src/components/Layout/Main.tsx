import { CSSProperties } from "react";
import "./Layout.css";
import ChocoCards from "../chocoCard";


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
        <div>
          <ChocoCards />
        </div>
        <div>
          <ChocoCards />
        </div>
        <div>
          <ChocoCards />
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
