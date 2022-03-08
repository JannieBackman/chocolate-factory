import {Link} from "react-router-dom";
import React, {CSSProperties} from "react";
import ChocoCards from "./chocoCard";

export default function Chocolates() {
    return (
        <div style={productsContainer}>
            <h3 style={productPageTitle}>Buy Chocolate</h3>
            <div style={productPageCards}>

                <div>
                <ChocoCards />

                <ChocoCards />

                <ChocoCards />

                <ChocoCards />
                </div>
                <div>
                <ChocoCards />

                <ChocoCards />

                <ChocoCards />

                <ChocoCards />
                </div>
                </div>

        </div>
    )
}

const productsContainer: CSSProperties = {
    display: "flex",
    flexDirection:"column"
}

const productPageTitle:CSSProperties = {
    textAlign: "center"
}

const productPageCards: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
}




