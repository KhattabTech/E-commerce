// CartContext.js
import { createContext, useState } from "react";

// إنشاء السياق
export const CartContext = createContext();

// إنشاء المزوّد الذي سيوفر البيانات لباقي المكونات
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // دالة لإضافة منتج إلى السلة
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      alert("This product is already added to the cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
