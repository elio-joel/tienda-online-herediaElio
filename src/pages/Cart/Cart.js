import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);
  return (
    <div>
      {cart.map((product) => (
        <div key={product.titulo}>
          <img src={product.imagen} alt={product.titulo} width="300px" />
          <h2>{product.titulo}</h2>
          <h2>{product.precio}</h2>
          <h2>{product.titulo}</h2>
          <button>Eliminar producto</button>
        </div>
      ))}
      {
        cart.length > 0 && <button onClick={clear}> Vaciar carrito </button>}

    </div>
  )
};

export default Cart