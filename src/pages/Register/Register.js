import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Register() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [city, setCity] = useState("");
  const [dropdown, setDropdown] = useState("");

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const onChangeValue = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    console.log({
      username,
      password,
      checkbox,
      firstName,
      lastName,
      email,
      city,
      dropdown,
    });
  };

  return (
    <div className="w-25 mx-auto py-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div key={`inline-radio`} className="mb-3" onChange={onChangeValue}>
          <Form.Check
            inline
            label="1"
            value="1"
            name="city"
            type="radio"
            id={`inline-radio-1`}
            // checked={city === "1"}
          />
          <Form.Check
            inline
            label="2"
            value="2"
            name="city"
            type="radio"
            id={`inline-radio-2`}
            // checked={city === "2"}
          />
          <Form.Check
            inline
            label="3"
            value="3"
            name="city"
            type="radio"
            id={`inline-radio-3`}
            // checked={city === "3"}
          />
        </div>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
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
        <Form.Select
          className="mb-3"
          aria-label="Default select example"
          value={dropdown}
          onChange={(e) => setDropdown(e.target.value)}
        >
          <option value="default">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
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
                Register
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={handleLoginClick}>
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Register;
