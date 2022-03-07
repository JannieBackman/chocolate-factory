import { CSSProperties } from "react";
import "./App.css";

function Main() {
  return (
    <div style={rootStyle}>
      <main className="MainContainer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          impedit modi voluptates asperiores ex iste vero ullam corrupti! Fugiat
          quas iure repellendus repellat. Quaerat voluptates facilis provident
          nisi totam a?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          impedit modi voluptates asperiores ex iste vero ullam corrupti! Fugiat
          quas iure repellendus repellat. Quaerat voluptates facilis provident
          nisi totam a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          impedit modi voluptates asperiores ex iste vero ullam corrupti! Fugiat
          quas iure repellendus repellat. Quaerat voluptates facilis provident
          nisi totam a?
        </p>
      </main>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default Main;
