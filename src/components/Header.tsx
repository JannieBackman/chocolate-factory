import { CSSProperties } from "react";

function Header() {
  return (
    <div style={rootStyle}>
      <h1>Chocolate Factory</h1>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#333",
  color: "whitesmoke",
};
export default Header;
