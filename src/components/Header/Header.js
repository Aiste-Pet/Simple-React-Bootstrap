import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "../Login/Login";

function Header({ username, items }) {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            {items?.map((item) => (
              <Nav.Link
                as={Link}
                className="nav-link"
                key={item.to}
                to={item.to}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Login username={username} />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
