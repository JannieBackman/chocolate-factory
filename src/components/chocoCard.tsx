import { title } from "process";
import { CSSProperties, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaIdCardAlt } from "react-icons/fa";
import { text } from "stream/consumers";
import chocolate from "../assets/chocolateBerry.jpg";
import Cards from "./data";

function ChocoCards(cards: Cards) {
  return (
    <Card border="dark" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={cards.image} style={{ width: "20rem" }} />
      <Card.Body style={cardBody}>
        <Card.Title>{cards.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{cards.text}</Card.Text>
        <Button variant="primary">Läs mer</Button>
      </Card.Body>
    </Card>
  );
  // return (
  //   <Card border="dark" style={{ width: "20rem" }}>
  //     <Card.Img variant="top" src={chocolate} style={{ width: "20rem" }} />
  //     <Card.Body style={cardBody}>
  //       <Card.Title>Belgisk Choklad</Card.Title>
  //       <Card.Text style={{ textAlign: "center" }}>
  //       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  //       </Card.Text>
  //       <Button variant="primary">Läs mer</Button>
  //     </Card.Body>
  //   </Card>
  // );
}

const cardBody: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default ChocoCards;
