import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Clothes",
      description: "Browse shirts, dresses, jackets, and other clothing.",
      value: "clothes",
    },
    {
      name: "Shoes",
      description: "Find stylish and comfortable shoes for everyday use.",
      value: "shoes",
    },
    {
      name: "Bags",
      description: "Explore bags for school, work, travel, and everyday use.",
      value: "bags",
    },
  ];

  return (
    <div>
      <h2>Product Categories</h2>

      <p>
        Browse ShopSphere products by category.
      </p>

      {categories.map((category) => (
        <section key={category.value}>
          <h3>{category.name}</h3>

          <p>{category.description}</p>

          <Link
            to={`/products?category=${category.value}`}
          >
            View Products
          </Link>
        </section>
      ))}
    </div>
  );
}

export default Categories;