import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCard({ game }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={game.imageLink} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>{game.description}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
