import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/common/Button";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (loading) {
    return (
      <div className="loading-container">
        <h3>Cargando Productos</h3>
        <p>Un momento por favor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Error</h3>
        <p>Revisa nuestra página principal o explora mas categorías...</p>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const { name, description, price, stock, imagesUrl, category } = product;
  const stockBadge = stock > 0 ? "success" : "error";
  const stockLabel = stock > 0 ? "En stock" : "Agotado";

  return (
    <div className="product-container">
      <nav className="product-navigation">
        <Link to="/">Inicio</Link>
        <Link to={`/category/${category._id}`}>${category.name}</Link>
      </nav>
      <div className="product-details">
        <div className="product-images">
          {imagesUrl?.map((img, index) => {
            return <img key={index} src={img} alt={name} />;
          })}
        </div>
        <div className="product-info">
          <h3>{name}</h3>
          <p>{description}</p>
          <span>{price}</span>
          <span className={`${stockBadge}`}>{stockLabel}</span>
        </div>
        <div className="product-actions">
          <Button onClick={(e) => addToCart(e)}>Agregar al carrito</Button>
          <Link to="/cart">Ver el carrito</Link>
        </div>
      </div>
    </div>
  );
}
