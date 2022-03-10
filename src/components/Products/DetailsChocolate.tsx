import React, {CSSProperties} from "react";
import ChocoCard from "./chocoCard";
import {mockedProducts, Product} from "../../products";

interface Props {
    product: Product;
}

export default function DetailsChocolate({ product }: Props) {
    return (
        <div style={detailsPage}>
            <h3>{product.title}</h3>
            <img src={product.image} alt="chocolate" style={{ width: "20rem" }}/>
            <p>{product.text}</p>
        </div>
    )
}

const detailsPage: CSSProperties = {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0",
    flexDirection: "column"
}