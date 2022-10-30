import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ hasLoggedIn, username }) {
  const loginText = "Signed in as: " + username;
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-around w-100">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Games</Nav.Link>
            <Nav.Link href="#link">Walkthroughs</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
            {hasLoggedIn && <Navbar.Text>{loginText}</Navbar.Text>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
