import React, {CSSProperties} from "react";
import ChocoCard from "./chocoCard";
import {mockedProducts} from "../../products";

export default function DetailsChocolate() {
    return (
        <div style={detailsPage}>
            <ChocoCard product={mockedProducts[1]}/>
        </div>
    )
}

const detailsPage: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    margin: "2rem 0"
}