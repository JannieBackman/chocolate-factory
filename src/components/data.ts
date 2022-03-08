import { Card } from "react-bootstrap";

interface Cards {
  image: string;
  title: string;
  text: string;
}

const contentCards: Cards[] = [
  {
    image: "../assets/chocolateBerry.jpg",
    title: "BerryChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: "../assets/chocolateDark.jpg",
    title: "DarkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: "../assets/chocolateGold.jpg",
    title: "GoldenChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: "../assets/chocolateHazelnut.jpg",
    title: "HazelnutChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: "../assets/chocolateMilk.jpg",
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: "../assets/chocolateOrange.jpg",
    title: "OrangeChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
];

export default Card;
