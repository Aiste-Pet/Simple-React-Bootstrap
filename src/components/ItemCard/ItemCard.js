import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2020/11/06_SeriousSamCollection_X1_ScreenX_1920_x_1080.jpg?resize=1920%2C1080&ssl=1"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
