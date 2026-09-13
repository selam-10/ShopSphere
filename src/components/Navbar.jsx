import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="nav-container">
        <button className="logo" onClick={() => navigate("/")}>
          ShopSphere
        </button>

        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <span>/</span>

          <NavLink to="/products">
            Products
          </NavLink>
          <span>/</span>

          <NavLink to="/categories">
            Categories
          </NavLink>
          <span>/</span>

          <NavLink to="/cart">
            Cart ({cartCount})
          </NavLink>
          <span>/</span>

          <NavLink to="/about">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;