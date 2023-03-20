import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, clear, quitItem } = useContext(CartContext);
  const navigate = useNavigate();
  const createOrder = () => {
    
    const db = getFirestore ();
    const querySnapshot = collection( db, 'orders');
    

    addDoc(querySnapshot, {
      buyer: {
        email: 'test2@test.com',
        name: 'Tomas',
        phone: '+154433211',
      },

    });
  };
   return (
    <div>
      {cart.map((product) => (
        <div
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}
          key={product.title}
        >
          <img src={`/img/${product.image}`} alt={product.title} width="120px" />
          <h2> Cantidad {product.quantity}</h2>
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>

          <button onClick={() => quitItem(product.id)}>Eliminar producto</button>
        </div>
      ))}
      {cart.length > 0 && 
      <button onClick> Completar mi compra </button>}
      {cart.length > 0 && 
      <button onClick={clear}> Vaciar carrito </button> }

      {cart.length === 0 && (
        <div>
          <h2> No tienes productos en tu carrito </h2>
          <button onClick={() => navigate('/')}>
            Comenza tu compra
          </button>
        </div>
      )}


    </div>
  )
};

export default Cart