import ItemCard from "../../components/ItemCard/ItemCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

function Games() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mocki.io/v1/829b69d2-63f5-44f3-a01c-96ebb296bfd5")
      .then((response) => response.json())
      .then((games) => {
        setGames(games);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <Row className="py-3">
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          games.map((game) => (
            <Col sm={3} key={game.id}>
              <ItemCard game={game} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Games;
