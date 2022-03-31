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
  detail: string;
  id: number;
  price: number;
  valuta: string;
}

// Array of objects that is all the chocolates on the page
export const mockedProducts: Product[] = [
  {
    image: berryChocolate,
    title: "Berry Chocolate",
    text: "Dark chocolate with raspberry.",
    detail:
      "Dark chocolate with chunks of raspberry. Made of 70% cacao. Vegan and eco-friendly.",
    id: 1,
    price: 25,
    valuta: "SEK",
  },
  {
    image: darkChocolate,
    title: "Dark Chocolate",
    text: "Rich dark chocolate. 70% cacao.",
    detail: "Rich dark chocolate. Made of 70% cacao. Vegan and eco-friendly.",
    id: 2,
    price: 20,
    valuta: "SEK",
  },
  {
    image: goldenChocolate,
    title: "Golden Chocolate",
    text: "Fancy chocolate in golden wrapping.",
    detail:
      "Gift set with fancy chocolate. Perfect for holidays or birthdays. Great quality chocolate.",
    id: 3,
    price: 30,
    valuta: "SEK",
  },
  {
    image: whiteChocolate,
    title: "White Chocolate",
    text: "Classic white chocolate.",
    detail: "Rich white chocolate. Vegan and eco-friendly.",
    id: 4,
    price: 20,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "Milk Chocolate",
    text: "Classic milk chocolate.",
    detail: "Rich milk chocolate. Made of 35% cacao.",
    id: 5,
    price: 25,
    valuta: "SEK",
  },
  {
    image: orangeChocolate,
    title: "Orange Chocolate",
    text: "Chocolate with orange zest.",
    detail:
      "Dark chocolate with a rich dash of orange. Made of 60% cacao. Made with eco-friendly oranges.",
    id: 6,
    price: 20,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "Milk Chocolate with SeaSalt",
    text: "Classic milk chocolate with seasalt.",
    detail: "Rich milk chocolate with a pinch of seasalt.",
    id: 7,
    price: 35,
    valuta: "SEK",
  },
  {
    image: milkChocolate,
    title: "Milk Chocolate with Almonds",
    text: "Classic milk chocolate with almonds.",
    detail: "Milk chocolate with crunchy almonds.",
    id: 8,
    price: 35,
    valuta: "SEK",
  },
];
