import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import { CartContext } from "../components/cartContext";

function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate(); 
  const product = productsData.find((item) => String(item.id) === productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSizes, setSelectedSizes] = useState(""); 

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => { 
    if (!selectedColor) {
      alert("Please select a color before adding to cart!");
      return;
    }
    if (product.sizes && !selectedSizes) {
      alert("Please select a size before adding to cart!");
      return;
    }

    addToCart(product, quantity, selectedColor, selectedSizes);
    navigate("/cartPage");
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
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
                {product.colors?.map((color) => (
                  <div
                    key={color}
                    className={`color-circle ${selectedColor === color ? "active" : ""}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>

            {product.sizes && (
              <div className="size-selector">
                <label>Select Sizes:</label>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSizes === size ? "active" : ""}`}
                      onClick={() => setSelectedSizes(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className="add-cart-btn" onClick={handleAddToCart}>
              Add {quantity} to Cart 
              {selectedColor && ` (${selectedColor}${selectedSizes ? `, ${selectedSizes}` : ""})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
