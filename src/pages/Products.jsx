import { Link, useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      category: "clothes",
      price: 800,
      description: "A comfortable everyday T-shirt.",
    },
    {
      id: 2,
      name: "Casual Dress",
      category: "clothes",
      price: 1500,
      description: "A simple and stylish casual dress.",
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "shoes",
      price: 2200,
      description: "Comfortable shoes for everyday activities.",
    },
    {
      id: 4,
      name: "Classic Sneakers",
      category: "shoes",
      price: 2500,
      description: "Stylish sneakers for casual outfits.",
    },
    {
      id: 5,
      name: "Everyday Backpack",
      category: "bags",
      price: 1800,
      description: "A practical bag for school and everyday use.",
    },
    {
      id: 6,
      name: "Leather Handbag",
      category: "bags",
      price: 3000,
      description: "A stylish handbag for everyday use.",
    },
  ];

  const filteredProducts = category
    ? products.filter(
        (product) => product.category === category
      )
    : products;

  return (
    <div>
      <h2>ShopSphere Products</h2>

      {category && (
        <p>
          Showing products in: <strong>{category}</strong>
        </p>
      )}

      {!category && (
        <p>
          Browse our clothes, shoes, and bags.
        </p>
      )}

      <div>
        {filteredProducts.map((product) => (
          <article key={product.id}>
            <h3>{product.name}</h3>

            <p>
              Category: {product.category}
            </p>

            <p>
              {product.description}
            </p>

            <p>
              Price: {product.price} ETB
            </p>

            <Link to={`/products/${product.id}`}>
              View Details
            </Link>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>
          No products found in this category.
        </p>
      )}
    </div>
  );
}

export default Products;