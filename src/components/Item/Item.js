import './style.css';
const Item  = ({product}) => {
    return (
        <div className ='item'>
            <img alt={product.titulo} src={product.imagen} width="100px" />
            <h2>{product.titulo}</h2>
            <h2>{product.precio}</h2>
            <h2>{product.category}</h2>
        </div>
    );
};

    export default Item;