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
}

export const mockedProducts: Product[] = [
  {
    image: berryChocolate,
    title: "BerryChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: darkChocolate,
    title: "DarkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: goldenChocolate,
    title: "GoldenChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: whiteChocolate,
    title: "WhiteChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: milkChocolate,
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: orangeChocolate,
    title: "OrangeChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: milkChocolate,
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: milkChocolate,
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
  {
    image: milkChocolate,
    title: "MilkChocolate",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,",
  },
];
