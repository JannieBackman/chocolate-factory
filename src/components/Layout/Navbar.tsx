import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Bootstrap navbar component
export default function NavigationBar() {
  return (
    <Navbar className="NavBarContainer" bg="light" variant="light">
      <Container>
        <Link className="navLinks" to="/">
          Home
        </Link>
        <Link className="navLinks" to="/chocolates">
          Products
        </Link>
      </Container>
    </Navbar>
  );
}
