import "./ShippingOptions.css";
import Postnord from "../../assets/postnord-logo.png";
import DHL from "../../assets/DHL-logo.png";
import Bring from "../../assets/bring-logo.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useBuy } from "../../context/BuyContext";
import { Buy, fakeFetch } from "../../components/fakeFetch";

function ShippingOptions() {
  const { buy, isLoading, submit } = useBuy();
  return (
    <div className="shipping-container">
      <div className="postnord-container">
        <input type="radio" value="Postnord" name="shipping" />
        <img className="img-styling" src={Postnord} alt="" />
        <p className="shipping-info">
          48h shipping time. Expected delivery on March 11.
        </p>
        <p className="shipping-info">
          Shipping fee: 25sek. Free if you shop for over 100sek.
        </p>
      </div>
      <div className="dhl-container">
        <input type="radio" value="DHL" name="shipping" />
        <img className="img-styling" src={DHL} alt="" />
        <p className="shipping-info">
          72h shipping time. Expected delivery on March 12.
        </p>
        <p className="shipping-info">Free shipping!</p>
      </div>
      <div className="bring-container">
        <input type="radio" value="Bring" name="shipping" />
        <img className="img-styling" src={Bring} alt="" />
        <p className="shipping-info">
          24h shipping time. Expected delivery March 10.
        </p>
        <p className="shipping-info">Shipping fee: 40sek.</p>
      </div>
      <div style={{ backgroundColor: "red" }}>
        {isLoading ? (
          <span>laddar...</span>
        ) : buy ? (
          <span>{buy.paymentValid}</span>
        ) : (
          <button onClick={submit}>Confirm purchase</button>
        )}
      </div>
    </div>
  );
}

export default ShippingOptions;
