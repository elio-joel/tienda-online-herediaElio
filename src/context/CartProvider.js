import { CartContext } from "./CartContext";
import { useState } from "react";


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    if (isInCart(item.id)) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          product.quantity = product.quantity + quantity;
          return product;
        } else {
          return product;
        }
      })
      setCart(newCart)


    } else {
      const product = {
        id: item.id,
        titulo: item.title,
        precio: item.price,
        quantity: quantity,
        imagen: item.image,
        category: item.category,
        stock: item.stock,
      };
      setCart([...cart, product]);
    };
  };

  const clear = () => {
    setCart([]);
  };

  const quitItem = (productId) => {
    setCart(cart.filter((product) => product.id !== productId))
  };

  const isInCart = (productId) => {
    if (cart.find((product) => product.id === productId)) {
      return true;
    } else {
      return false;
    }

  }


  return (
    <CartContext.Provider value={{ cart, addItem, clear, quitItem }}>
      {children}
    </CartContext.Provider>
  );

};

export default CartProvider