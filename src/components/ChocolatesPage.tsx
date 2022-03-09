import React from "react";
import { mockedProducts } from "../products";
import ChocoCard from "./Products/chocoCard";

export default function Chocolates() {
  return (
    <div>
      <h3>Buy Chocolate</h3>
      <div>
        {mockedProducts.map((product) => (
          <ChocoCard product={product} />
        ))}
      </div>
    </div>
  );
}
