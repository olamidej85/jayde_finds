import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

 const addToCart = (product, quantity, color, sizes) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.id === product.id && item.color === color && item.sizes === sizes
      );

      if (existingItemIndex >= 0) {
       const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [
          ...prev,
          {
            ...product,
            quantity,
            color,
            sizes,
          },
        ];
      }
    });
  };

  const removeFromCart = (id, color, sizes) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.color === color && item.sizes === sizes)
      )
    );
  };
 const updateQuantity = (id, color, sizes, newQuantity) => {
    if (newQuantity < 1) return; 
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.sizes === sizes
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };
 const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
