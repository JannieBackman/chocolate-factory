import cotedor from "../assets/cotedor.jpeg";
import "./DetailPage.css";

function DetailPage() {
  return (
    <div className="product-container">
      <img src={cotedor} alt="" />
      <div className="product-text-container">
        <h1 className="chocolate-name">Côte D'or</h1>
        <p>Premium chocolate! :D</p>
        <p>50:-</p>
      </div>
    </div>
  );
}

export default DetailPage;
