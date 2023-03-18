import Counter from "../Counter/ItemCount";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        flexDirection: 'column',
        marginBottom: '20px red',
        borderTop: '25px yellow'

      }}
    >
      <img src={detail.imagen} alt={detail.titulo} width="300px" />
      <h2>{detail.titulo}</h2>
      <h2>{detail.precio}</h2>
      <Counter counter={counter} setCounter={setCounter} />
      <button onClick={() => navigate('/')}>
        Seguir comprando
      </button>
      <button onClick={() => addItem (detail, counter)}>
        Agregar al carrrito
      </button>
      <button onClick={() => navigate('/cart')}>
        Finalizar mi compra
      </button>
    </div>
  );
};

export default ItemDetail