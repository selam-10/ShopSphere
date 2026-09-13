import { NavLink, Outlet } from "react-router-dom";

function Layout({ cartCount }) {
  return (
    <div>
      <header className="site-header">
        <h1>ShopSphere</h1>

        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          {" / "}

          <NavLink to="/products">
            Products
          </NavLink>
          {" / "}

          <NavLink to="/categories">
            Categories
          </NavLink>
          {" / "}

          <NavLink to="/cart">
            Cart ({cartCount})
          </NavLink>
          {" / "}

          <NavLink to="/about">
            About
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          © 2026 ShopSphere. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;