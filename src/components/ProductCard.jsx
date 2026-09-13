import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h2>{product.title}</h2>

      <p>Category: {product.category}</p>

      <p>Price: {product.price} ETB</p>

      <p>⭐ {product.rating}</p>

      <Link to={`/products/${product.id}`}>
        <button>View Details</button>
      </Link>

      <button
        onClick={() =>
          onAddToCart({
            id: product.id,
            name: product.title,
            price: product.price,
            category: product.category,
            image: product.thumbnail,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;