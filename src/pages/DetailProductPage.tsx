import { CSSProperties, useContext, useState, useEffect } from "react";
import { FooterDetailPage } from "../components/Layout/Footer";
import background from "../assets/Background.jpg";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { mockedProducts, Product } from "../products";

export default function DetailsChocolate() {
  let navigate = useNavigate();
  let context = useContext(CartContext);
  const { productId } = useParams();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const getProduct = () => {
      let foundProduct;
      if (productId) {
        foundProduct = mockedProducts.find((p) => p.id === parseInt(productId));
      }

      setProduct(foundProduct);
    };
    getProduct();
  }, [productId]);

  return (
    <div style={detailsPage}>
      <h3>{product?.title}</h3>
      <img src={product?.image} alt="chocolate" style={{ width: "40rem" }} />
      <p>{product?.text}</p>
      {product && (
        <Button
          style={buttonStyle}
          variant="dark"
          onClick={() => context.addToCart(product)}
        >
          Add to cart
        </Button>
      )}
      <Button onClick={() => navigate(-1)} variant="dark">
        Back
      </Button>
      <FooterDetailPage />
    </div>
  );
}

const detailsPage: CSSProperties = {
  display: "flex",
  alignItems: "center",
  margin: "0 0",
  flexDirection: "column",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  WebkitBackgroundSize: "cover",
  height: "100vh",
};

const buttonStyle: CSSProperties = {
  marginBottom: "1rem",
};
