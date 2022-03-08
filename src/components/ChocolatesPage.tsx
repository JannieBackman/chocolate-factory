import { Link } from "react-router-dom";
import React from "react";
import { mockedProducts } from "../data";
import ChocoCard from "./chocoCard";

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
