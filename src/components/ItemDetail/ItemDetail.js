import Counter from "../Counter/ItemCount";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);

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
      <img src={`/img/${detail.image}`} alt={detail.title} width="200px" />
      <h2>{detail.title}</h2>
      <h2> $ {detail.price}</h2>
      <h2>Stock disponible: {detail.stock}</h2>
      <Counter counter={counter} setCounter={setCounter} />
      <button onClick={() => navigate('/')}>
        Seguir comprando
      </button>
      <button disabled={counter > detail.stock ? true : false} onClick={() => addItem(detail, counter)}>
        Agregar al carrrito
      </button>
      <button onClick={() => navigate('/cart')}>
        Finalizar mi compra
      </button>
    </div>
  );
};

export default ItemDetail