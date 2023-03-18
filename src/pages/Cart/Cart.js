import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart , clear } = useContext(CartContext);
  return (
    <div>
      {cart.map((product) => (
        <div key={product.titulo}>
          <h2>{product.titulo}</h2>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clear}> Vaciar carrito</button>}
          
  </div>
  )
};

export default Cart