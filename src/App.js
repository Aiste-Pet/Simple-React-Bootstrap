import "bootstrap/dist/css/bootstrap.min.css";
import ItemCarousel from "./components/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intro from "./components/Intro/Intro";
import ItemCard from "./components/ItemCard/ItemCard";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Header";

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <Row className="m-0 py-3">
          <Col sm={12} className="p-0">
            <ItemCarousel />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="py-3 text-justify">
            <Intro />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <ItemCard />
          </Col>
          <Col sm={3}>
            <ItemCard />
          </Col>
          <Col sm={3}>
            <ItemCard />
          </Col>
          <Col sm={3}>
            <ItemCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
