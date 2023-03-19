import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to={'/cart'}>
      <div>
        <img alt="carrito-compra" src="/img/carrito.png" width='35px' />
        {cart?.length}
      </div>
    </Link>
  );
};

export default CartWidget