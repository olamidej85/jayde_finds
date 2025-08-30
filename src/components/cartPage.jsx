import React, { useContext } from "react";
import { CartContext } from "../components/cartContext";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={`/${item.image}`} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Color: {item.color}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => removeFromCart(item.id, item.color)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
