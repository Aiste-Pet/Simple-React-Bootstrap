import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "./components/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intro from "./components/Intro/Intro";
import ItemCard from "./components/ItemCard/ItemCard";

function App() {
  return (
    <div>
      <Header />
      <Container className="m-0 p-0 w-100">
        <Row className="m-0 p-0 w-100">
          <Col sm={8}>
            <ControlledCarousel />
          </Col>
          <Col sm={4}>
            <Intro />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col sm={4}>
            <ItemCard />
          </Col>
          <Col sm={4}>
            <ItemCard />
          </Col>
          <Col sm={4}>
            <ItemCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
