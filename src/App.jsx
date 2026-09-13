import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Checkout from "./pages/checkout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => [
      ...currentCart,
      product,
    ]);
  }

  function removeFromCart(productId) {
    setCart((currentCart) => {
      const index =
        currentCart.findIndex(
          (product) =>
            product.id === productId
        );

      if (index === -1) {
        return currentCart;
      }

      return currentCart.filter(
        (_, i) => i !== index
      );
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            cartCount={cart.length}
          />
        }
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path="products"
          element={
            <Products
              onAddToCart={addToCart}
            />
          }
        />

        <Route
          path="products/:id"
          element={
            <ProductDetails
              onAddToCart={addToCart}
            />
          }
        />

        <Route
          path="categories"
          element={<Categories />}
        />

        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              onRemove={removeFromCart}
              onClear={clearCart}
            />
          }
        />

        <Route
          path="checkout"
          element={
            <Checkout cart={cart} />
          }
        />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;