import {CSSProperties} from "react";

export default function PaymentBasket() {
    return (
        <div>
            <div>
                <p style={cartStyle}>Your contact information</p>
                <p style={cartStyle}>Choice payment</p>
                <p style={cartStyle}>Choice shipping</p>
            </div>

        </div>
    )
}

const cartStyle:CSSProperties = {
    fontSize: "2rem",

}