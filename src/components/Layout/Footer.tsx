import { CSSProperties } from "react";

function Footer() {
  return (
    <div style={rootStyle}>
      <div>
        <h3 style={{ margin: "0" }}>Contact us</h3>
        <span>
          Send us an{" "}
          <a
            style={{ fontWeight: "bold", color: "white" }}
            href="mailto:email@example.com"
          >
            email!
          </a>
        </span>
      </div>

      <div>
        <span style={{ display: "flex", alignItems: "flex-end" }}>
          ©Anna Özmehak, Ella Larsson, Jannie Bäckman Kuurne
        </span>
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  backgroundColor: "#333",
  color: "whitesmoke",
  padding: "1rem",
  fontSize: "smaller",
};
export default Footer;
