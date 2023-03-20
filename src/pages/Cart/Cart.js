import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clear, quitItem } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      {cart.map((product) => (
        <div
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}
          key={product.titulo}
        >
          <img src={product.imagen} alt={product.titulo} width="120px" />
          <h2> Cantidad {product.quantity}</h2>
          <h2>{product.titulo}</h2>
          <h2>{product.precio}</h2>

          <button onClick={() => quitItem(product.id)}>Eliminar producto</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clear}> Vaciar carrito </button>}
      {cart.length === 0 && <div>
        <h2> No tienes productos en tu carrito </h2>
        <button onClick={() => navigate('/')}>
          Comenza tu compra
        </button>
      </div>
      }


    </div>
  )
};

export default Cart