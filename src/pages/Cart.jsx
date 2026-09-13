import { Link } from "react-router-dom";

function Cart({
  cart,
  onRemove,
  onClear,
}) {
  const groupedProducts = cart.reduce(
    (items, product) => {
      const existing = items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        items.push({
          ...product,
          quantity: 1,
        });
      }

      return items;
    },
    []
  );

  const total = groupedProducts.reduce(
    (sum, product) => {
      return (
        sum +
        product.price * product.quantity
      );
    },
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {groupedProducts.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>

          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          {groupedProducts.map((product) => (
            <div
              className="cart-item"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.name}
                width="150"
              />

              <div>
                <h2>{product.name}</h2>

                <p>
                  Category: {product.category}
                </p>

                <p>
                  Price: {product.price} ETB
                </p>

                <p>
                  Quantity: {product.quantity}
                </p>

                <p>
                  Subtotal:{" "}
                  {product.price *
                    product.quantity}{" "}
                  ETB
                </p>

                <button
                  onClick={() =>
                    onRemove(product.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>
            Total: {total} ETB
          </h2>

          <button onClick={onClear}>
            Clear Cart
          </button>

          <br />
          <br />

          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;