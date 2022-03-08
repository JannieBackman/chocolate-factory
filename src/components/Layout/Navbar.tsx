import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

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
        <Link className="navLinks" to={"/aboutUs"}>
            About Us
        </Link>
      </Container>
    </Navbar>
  );
}


