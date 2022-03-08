import { CSSProperties } from "react";
import { Button, Card } from "react-bootstrap";
import { FaIdCardAlt } from "react-icons/fa";
import { text } from "stream/consumers";
import chocolate from "../../assets/chocolateBerry.jpg";

function ChocoCards() {
  return (
    <Card border="dark" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={chocolate} style={{ width: "20rem" }} />
      <Card.Body style={cardBody}>
        <Card.Title>Belgian Chocolate</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
        </Card.Text>
        <Button variant="primary">Läs mer</Button>
      </Card.Body>
    </Card>
  );
}

const cardBody: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default ChocoCards;
