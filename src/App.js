import "bootstrap/dist/css/bootstrap.min.css";
import ItemCarousel from "./components/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intro from "./components/Intro/Intro";
import ItemCard from "./components/ItemCard/ItemCard";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const games = [
    {
      id: 1,
      name: "Serious Sam: The First Encounter",
      description:
        "In a world where cyberpunk meets fantasy and hi-tech devices are mixed with black magic and psychic powers, Sam travels from the beautiful world of ancient Egypt through many diverse planets, confronting hordes of Mental's hideous minions on his way to the final showdown at Notorious Mental's lair. ",
      imageLink:
        "https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2020/11/06_SeriousSamCollection_X1_ScreenX_1920_x_1080.jpg?resize=1920%2C1080&ssl=1",
    },
    {
      id: 2,
      name: "Mass Effect",
      description:
        "As Commander Shepard, you lead an elite squad on a heroic, action-packed adventure throughout the galaxy. Discover the imminent danger from an ancient threat and battle the traitorous Saren and his deadly army to save civilization. The fate of all life depends on your actions!",
      imageLink:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/17460/header.jpg?t=1642702367",
    },
    {
      id: 3,
      name: "Dinkum",
      description:
        "G’Day! Get ready to start a new fair Dinkum life and build your new home out in the bush. Explore tropical eucalyptus forests, scorching deserts and cool billabongs on an Island inspired by the wild Australian outback. Take care of giant wombats, play with friends and get ready for a ripper time!",
      imageLink:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1062520/header.jpg?t=1665535012",
    },
    {
      id: 4,
      name: "The Witcher® 3: Wild Hunt",
      description:
        "The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
      imageLink:
        "https://image.api.playstation.com/vulcan/img/rnd/202009/2912/LnnL0eOnJlx6jSO9wZ6lXr9q.jpg",
    },
  ];
  const username = "";
  return (
    <div>
      <Navigation hasLoggedIn={username != ""} username={username} />
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
          {games.map((game) => (
            <Col sm={3} key={game.id}>
              <ItemCard game={game} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
