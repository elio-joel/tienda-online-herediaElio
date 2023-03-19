import { CartContext } from "./CartContext";
import { useState } from "react";


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const product = {
      id: item.id,
      titulo: item.titulo,
      precio: item.precio,
      quantity: quantity,
      imagen: item.imagen,
      category: item.category,
      stock: item.stock,
    };
    setCart([...cart, product]);
    // console.log(cart);

  };

  const clear = () => {
    setCart([]);
  };

  const quitItem = (productId) => {
    setCart(cart.filter((product) => product.id !== productId))
  }
  return (
    <CartContext.Provider value={{ cart, addItem, clear, quitItem }}>
      {children}
    </CartContext.Provider>
  );

};

export default CartProvider