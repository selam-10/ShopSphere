import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      category: "Clothes",
      price: 800,
      description:
        "A comfortable everyday T-shirt that works well for casual outfits.",
    },
    {
      id: 2,
      name: "Casual Dress",
      category: "Clothes",
      price: 1500,
      description:
        "A simple and stylish casual dress for everyday occasions.",
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: 2200,
      description:
        "Comfortable shoes designed for everyday activities and exercise.",
    },
    {
      id: 4,
      name: "Classic Sneakers",
      category: "Shoes",
      price: 2500,
      description:
        "Stylish sneakers that are easy to combine with casual outfits.",
    },
    {
      id: 5,
      name: "Everyday Backpack",
      category: "Bags",
      price: 1800,
      description:
        "A practical backpack suitable for school, work, and everyday use.",
    },
    {
      id: 6,
      name: "Leather Handbag",
      category: "Bags",
      price: 3000,
      description:
        "A stylish handbag designed for everyday use.",
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <p>
          The product you are looking for does not exist.
        </p>

        <Link to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/products">
        ← Back to Products
      </Link>

      <h2>{product.name}</h2>

      <p>
        Category: {product.category}
      </p>

      <p>
        Price: {product.price} ETB
      </p>

      <p>{product.description}</p>

      <button type="button">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;