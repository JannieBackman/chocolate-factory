import { CSSProperties } from "react";

function Footer() {
  return (
    <div style={rootStyle}>
      <h3>Kontakta oss</h3>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#333",
  color: "whitesmoke",
};
export default Footer;
