import { CSSProperties } from "react";

export function Footer() {
  return (
    <div className="footerStyle" style={rootStyle}>
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
        <span className="namesFooter" style={{ display: "flex", alignItems: "flex-end" }}>
          ©Anna Özmehak, Ella Larsson, Jannie Bäckman Kuurne
        </span>
      </div>
    </div>
  );
}

export function FooterProductPage() {
  return (
    <div className="footerStyle" style={footerStyle}>
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
        <span className="namesFooter" style={{ display: "flex", alignItems: "flex-end" }}>
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
  position: "fixed",
  width: "100%",
  bottom: "0",
};

const footerStyle: CSSProperties = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  backgroundColor: "#333",
  color: "whitesmoke",
  padding: "1rem",
  position: "sticky",
  width: "100%",
  bottom: "0",
};
