import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to ShopSphere</h2>

      <p>
        A simple online store for clothes, shoes, and bags.
      </p>

      <p>
        Browse our products, explore categories, and find
        products that fit your style.
      </p>

      <Link to="/products">
        Browse Products
      </Link>

      <h3>Shop by Category</h3>

      <div>
        <section>
          <h4>Clothes</h4>
          <p>
            Explore everyday clothing and stylish outfits.
          </p>

          <Link to="/products?category=clothes">
            Shop Clothes
          </Link>
        </section>

        <section>
          <h4>Shoes</h4>
          <p>
            Find comfortable and stylish shoes.
          </p>

          <Link to="/products?category=shoes">
            Shop Shoes
          </Link>
        </section>

        <section>
          <h4>Bags</h4>
          <p>
            Discover practical and stylish bags.
          </p>

          <Link to="/products?category=bags">
            Shop Bags
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;