import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    event.preventDefault();
    console.log({ username, password, checkbox });

    setValidated(true);
  };

  return (
    <div className="w-25 mx-auto py-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
            required
          />
        </Form.Group>
        <Container>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={handleRegisterClick}>
                Register
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Login;
