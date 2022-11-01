import ItemCarousel from "../../components/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intro from "../../components/Intro/Intro";

function Home() {
  return (
    <Container>
      <Row className="m-0 py-0">
        <Col sm={12} className="p-0">
          <ItemCarousel />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="py-3 text-justify">
          <Intro />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
