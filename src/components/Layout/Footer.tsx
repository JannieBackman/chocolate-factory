import { CSSProperties } from "react";

// Footer component
export function Footer() {
  return (
    <div className="footerStyle" style={footerStyle}>
      <div>
        <h3 className="contactUs">Contact us</h3>
        <span className="sendUs">
          Send us an{" "}
          <a className="emailUs" href="mailto:email@example.com">
            email!
          </a>
        </span>
      </div>

      <div>
        <span className="namesFooter">
          ©Anna Özmehak, Ella Larsson, Jannie Bäckman Kuurne
        </span>
      </div>
    </div>
  );
}

// Footer component for detailpage
export function FooterDetailPage() {
  return (
    <div className="footerStyle" style={footerDetailStyle}>
      <div>
        <h3 className="contactUs">Contact us</h3>
        <span className="sendUs">
          Send us an{" "}
          <a className="emailUs" href="mailto:email@example.com">
            email!
          </a>
        </span>
      </div>

      <div>
        <span className="namesFooter">
          ©Anna Özmehak, Ella Larsson, Jannie Bäckman Kuurne
        </span>
      </div>
    </div>
  );
}

const footerDetailStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
  alignItems: "center",
  backgroundColor: "#333",
  color: "whitesmoke",
  padding: "1rem",
  position: "sticky",
  width: "100%",
  bottom: "0",
};
