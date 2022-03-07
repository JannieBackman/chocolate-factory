import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar className="NavBarContainer" bg="light" variant="light">
      <Container>
        {/*<Link className="navLinks" to="/home">*/}
        {/*  Home*/}
        {/*</Link>*/}
        {/*<Link className="navLinks" to="/chocolates">*/}
        {/*  Chocolates*/}
        {/*</Link>*/}
      </Container>
    </Navbar>
  );
}


