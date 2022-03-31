import berryChocolate from "./assets/chocolateBerry.jpg";
import darkChocolate from "./assets/chocolateDark.jpg";
import goldenChocolate from "./assets/chocolateGold.jpg";
import whiteChocolate from "./assets/chocolateWhite.jpg";
import milkChocolate from "./assets/chocolateMilk.jpg";
import orangeChocolate from "./assets/chocolateOrange.jpg";

export interface Product {
  image: any;
  title: string;
  text: string;
  id: number;
  price: number;
  valuta: string;
}

export const mockedProducts: Product[] = [
  {
    image: berryChocolate,
    title: "Berry Chocolate",
    text: "Dark chocolate with raspberry.",
    id: 1,
    price: 25,
    valuta: "SEK",
  },
  {
    image: darkChocolate,
    title: "Dark Chocolate",
    text: "Rich dark chocolate. 70% cacao.",
    id: 2,
    price: 20,
    valuta: "SEK",
  },
  {
    image: goldenChocolate,
    title: "Golden Chocolate",
    text: "Fancy chocolate in golden wrapping.",
    id: 3,
    price: 30,
    valuta: "SEK",
  },
  {
    image: whiteChocolate,
    title: "White Chocolate",
    text: "Classic white chocolate.",
    id: 4,
    price: 20,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "Milk Chocolate",
    text: "Classic milk chocolate.",
    id: 5,
    price: 25,
    valuta: "SEK",
  },
  {
    image: orangeChocolate,
    title: "Orange Chocolate",
    text: "Chocolate with orange zest.",
    id: 6,
    price: 20,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "Milk Chocolate with SeaSalt",
    text: "Classic milk chocolate with seasalt.",
    id: 7,
    price: 35,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "Milk Chocolate with Almonds",
    text: "Classic milk chocolate with almonds.",
    id: 8,
    price: 35,
    valuta: "SEK",
  },
];
