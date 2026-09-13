import { useState } from "react";

function Checkout({ cart }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const total = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !phone || !address) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(
      "Order placed successfully! Thank you for shopping with ShopSphere."
    );
  }

  return (
    <div>
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Order Summary</h2>

          {cart.map((product, index) => (
            <p key={`${product.id}-${index}`}>
              {product.name} - {product.price} ETB
            </p>
          ))}

          <h2>Total: {total} ETB</h2>

          <h2>Delivery Information</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">
                Name
              </label>

              <br />

              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
              />
            </div>

            <br />

            <div>
              <label htmlFor="phone">
                Phone
              </label>

              <br />

              <input
                id="phone"
                type="text"
                placeholder="Your phone number"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
              />
            </div>

            <br />

            <div>
              <label htmlFor="address">
                Address
              </label>

              <br />

              <textarea
                id="address"
                placeholder="Delivery address"
                value={address}
                onChange={(event) =>
                  setAddress(event.target.value)
                }
              />
            </div>

            <br />

            <button type="submit">
              Place Order
            </button>
          </form>

          {message && (
            <p>{message}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Checkout;