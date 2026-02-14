import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "30px" }}>Product not found</h2>;
  }

  return (
    <div className="details">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>

        <p>
          This is a premium quality {product.name} designed for comfort,
          durability, and modern home interiors. Perfect for living rooms,
          offices, and stylish spaces.
        </p>

        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;