import React, { useContext } from "react";
import { CartContext } from "./cartContext";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty</h2>;
  }

  const calculateSubtotal = (item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, "")); 
    return price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td className="cart-product">
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.color, item.sizes)}
                >
                  🗑
                </button>
                <img src={`/${item.image}`} alt={item.name} />
                <div className="cart-product-details">
                  <span className="cart-product-name">{item.name}</span>
                  {item.color && <span className="cart-product-variant">Color: {item.color}</span>}
                  {item.sizes && <span className="cart-product-variant">Size: {item.sizes}</span>}
                </div>
              </td>
              <td className="cart-price">₦{parseFloat(item.price.replace(/[^\d.]/g, "")).toLocaleString()}</td>
              <td className="cart-quantity">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.color, item.sizes, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.color, item.sizes, item.quantity + 1)
                  }
                >
                  +
                </button>
              </td>
              <td className="cart-subtotal">
                ₦{calculateSubtotal(item).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-total">
        <h3>Total: ₦{calculateTotal().toLocaleString()}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
