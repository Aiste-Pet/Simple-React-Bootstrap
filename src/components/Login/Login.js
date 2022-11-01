import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Login({ username }) {
  const loginText = "Signed in as: " + username;
  if (username === "") {
    return (
      <Nav.Link as={Link} className="nav-link" key="/login" to="/login">
        Login
      </Nav.Link>
    );
  } else return <div className="nav-link">{loginText}</div>;
}

export default Login;
