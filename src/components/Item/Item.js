import './style.css';
const Item  = ({product}) => {
    return (
        <div className ='item'>
            <img alt={product.titulo} src={`/img/${product.image}`} width="100px" />
            <h2>{product.title}</h2>
            <h2>${product.price}</h2>
            <h2>{product.category}</h2>
        </div>
    );
};

    export default Item;