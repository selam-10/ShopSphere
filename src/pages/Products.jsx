
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const selectedCategory = searchParams.get("category") || "All";

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  function handleCategory(category) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (loading) {
    return (
      <div>
        <h1>Products</h1>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Products</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>

      <p>
        Browse our products and find something you love.
      </p>

      <div>
        <label htmlFor="search">
          Search Products
        </label>

        <br />

        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <br />

      <div>
        <strong>Category:</strong>{" "}

        <button onClick={() => handleCategory("All")}>
          All
        </button>

        <button onClick={() => handleCategory("beauty")}>
          Beauty
        </button>

        <button onClick={() => handleCategory("fragrances")}>
          Fragrances
        </button>

        <button onClick={() => handleCategory("furniture")}>
          Furniture
        </button>

        <button onClick={() => handleCategory("groceries")}>
          Groceries
        </button>

        <button onClick={() => handleCategory("laptops")}>
          Laptops
        </button>

        <button onClick={() => handleCategory("mens-shirts")}>
          Men's Shirts
        </button>

        <button onClick={() => handleCategory("mens-shoes")}>
          Men's Shoes
        </button>

        <button onClick={() => handleCategory("womens-dresses")}>
          Women's Dresses
        </button>

        <button onClick={() => handleCategory("womens-shoes")}>
          Women's Shoes
        </button>
      </div>

      <br />

      <div>
        <label htmlFor="sort">
          Sort:
        </label>{" "}

        <select
          id="sort"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="">Default</option>
          <option value="low">
            Price Low → High
          </option>
          <option value="high">
            Price High → Low
          </option>
        </select>
      </div>

      <br />

      <p>
        Showing {filteredProducts.length} product(s)
      </p>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;

