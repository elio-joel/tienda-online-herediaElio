import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clear, quitItem } = useContext(CartContext);
  return (
    <div>
      {cart.map((product) => (
        <div
          style={{ display: 'flex', flexDirection: 'row', }}
          key={product.titulo}
        >
          <img src={product.imagen} alt={product.titulo} width="120px" />
          <h2>{product.titulo}</h2>
          <h2>{product.precio}</h2>
          <button onClick={() => quitItem(product.id)}>Eliminar producto</button>
        </div>
      ))}
      {
        cart.length > 0 && <button onClick={clear}> Vaciar carrito </button>}

    </div>
  )
};

export default Cart