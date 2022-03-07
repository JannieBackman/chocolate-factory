import { Navbar, Container, Nav } from "react-bootstrap";
import { CSSProperties } from "react";

export default function Navigationbar() {
  return (
    <Navbar style={rootStyle} bg="light" variant="light">
      <Container>
        <Nav.Link style={linkStyle} href="#home">
          Home
        </Nav.Link>
        <Nav.Link style={linkStyle} href="#chocolates">
          Chocolates
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

const rootStyle: CSSProperties = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
};

const linkStyle: CSSProperties = {
  marginLeft: "2rem",
};
