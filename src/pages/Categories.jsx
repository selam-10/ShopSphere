import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Beauty",
      value: "beauty",
      description: "Beauty and personal care products.",
    },
    {
      name: "Fragrances",
      value: "fragrances",
      description: "Perfumes and fragrances for every occasion.",
    },
    {
      name: "Furniture",
      value: "furniture",
      description: "Furniture for your home and office.",
    },
    {
      name: "Groceries",
      value: "groceries",
      description: "Everyday grocery products.",
    },
    {
      name: "Laptops",
      value: "laptops",
      description: "Laptops and computer products.",
    },
    {
      name: "Men's Shirts",
      value: "mens-shirts",
      description: "Stylish shirts for men.",
    },
    {
      name: "Men's Shoes",
      value: "mens-shoes",
      description: "Shoes for men.",
    },
    {
      name: "Women's Dresses",
      value: "womens-dresses",
      description: "Beautiful dresses for women.",
    },
    {
      name: "Women's Shoes",
      value: "womens-shoes",
      description: "Stylish shoes for women.",
    },
  ];

  return (
    <div>
      <h1>Product Categories</h1>

      <p>
        Browse ShopSphere products by category.
      </p>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            className="category-card"
            key={category.value}
          >
            <h2>{category.name}</h2>

            <p>{category.description}</p>

            <Link
              to={`/products?category=${category.value}`}
            >
              View Products
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;