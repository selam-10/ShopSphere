import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error(
            "Product not found"
          );
        }

        const data =
          await response.json();

        setProduct(data);
      } catch (error) {
        setError(
          "Product not found."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h1>Product Details</h1>
        <p>Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div>
        <h1>Product Not Found</h1>

        <p>
          The product you are looking for
          does not exist.
        </p>

        <button
          onClick={() =>
            navigate("/products")
          }
        >
          Back to Products
        </button>
      </div>
    );
  }

  function handleAddToCart() {
    onAddToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      category: product.category,
      image: product.thumbnail,
    });
  }

  return (
    <div className="product-details">
      <button
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="300"
      />

      <h2>
        {product.price} ETB
      </h2>

      <p>
        <strong>Category:</strong>{" "}
        {product.category}
      </p>

      <p>
        <strong>Rating:</strong>{" "}
        ⭐ {product.rating}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {product.description}
      </p>

      <p>
        <strong>Brand:</strong>{" "}
        {product.brand || "N/A"}
      </p>

      <p>
        <strong>Stock:</strong>{" "}
        {product.stock}
      </p>

      <button
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;