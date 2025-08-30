import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import productsData from "../data/productsData";
import { CartContext } from "../components/cartContext";


function ProductDetailPage() {
  const { productId } = useParams();
  const product = productsData.find((item) => String(item.id) === productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

   const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };


  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Product not found
      </h2>
    );
  }

  return (
    <div className="app-container">
  
      <div className="product-detail-page">
        <div className="product-detail-container">
          <div className="product-image">
            <img src={`/${product.image}`} alt={product.name} />
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <h2 className="price">{product.price}</h2>
            <p className="description">{product.description}</p>
            <p className={`stock ${product.stock ? "in-stock" : "out-of-stock"}`}>
              {product.stock ? "In Stock" : "Out of Stock"}
            </p>

    
            <div className="quantity-selector">
              <button onClick={decreaseQty} className="quantity-btn">-</button>
              <span className="quantity-number">{quantity}</span>
              <button onClick={increaseQty} className="quantity-btn">+</button>
            </div>

           <div className="color-selector">
  <label>Select Color:</label>
  <div className="color-options">
    {["Red", "Black", "pink", "grey"].map((color) => (
      <div
        key={color}
        className={`color-circle ${
          selectedColor === color ? "active" : ""
        }`}
        style={{ backgroundColor: color.toLowerCase() }}
        onClick={() => setSelectedColor(color)}
      ></div>
    ))}
  </div>
</div>

            <button className="add-cart-btn" onClick={handleAddToCart}>
      Add {quantity} to Cart {selectedColor && `(${selectedColor})`}
    </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;