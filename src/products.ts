import berryChocolate from "./assets/chocolateBerry.jpg";
import darkChocolate from "./assets/chocolateDark.jpg";
import goldenChocolate from "./assets/chocolateGold.jpg";
import whiteChocolate from "./assets/chocolateWhite.jpg";
import milkChocolate from "./assets/chocolateMilk.jpg";
import orangeChocolate from "./assets/chocolateOrange.jpg";
import { string } from "yup";

export interface Product {
  image: any;
  title: string;
  text: string;
  id: string;
  price: number;
  valuta: string;
}

export const mockedProducts: Product[] = [
  {
    image: berryChocolate,
    title: "BerryChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "1",
    price: 20,
    valuta: "SEK",
  },
  {
    image: darkChocolate,
    title: "DarkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "1",
    price: 20,
    valuta: "SEK",
  },
  {
    image: goldenChocolate,
    title: "GoldenChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "2",
    price: 20,
    valuta: "SEK",
  },
  {
    image: whiteChocolate,
    title: "WhiteChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "3",
    price: 20,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "4",
    price: 20,
    valuta: "SEK",
  },
  {
    image: orangeChocolate,
    title: "OrangeChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "5",
    price: 20,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "6",
    price: 20,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "7",
    price: 20,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
    id: "8",
    price: 20,
    valuta: "SEK",
  },
];
